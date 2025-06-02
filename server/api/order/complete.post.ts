import crypto from "node:crypto";
import { presignPdf } from "@server/utils/S3";
import { sendTicketEmail } from "@server/utils/mandrill";

/**
 * Валидация подписи Flywire (HMAC‑SHA256).
 * Flywire генерит sig = HMAC(secret, k1=v1&k2=v2&...)
 * Поля сортируются по alphanum; reference, amount, paymentMethod и т.д.
 */
function verifyFlywireSig(
  payload: Record<string, string>,
  sig: string,
  secret: string,
) {
  const canon = Object.keys(payload)
    .sort()
    .map((k) => `${k}=${payload[k]}`)
    .join("&");

  const expected = crypto
    .createHmac("sha256", secret)
    .update(canon)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(sig, "hex"),
    Buffer.from(expected, "hex"),
  );
}

export default defineEventHandler(async (event) => {
  const {
    flywireReference,
    amount,
    paymentMethod,
    sig,
    email: emailFromClient,
    pdfKey,
  } = await readBody(event);

  // 1. HMAC‑check
  if (
    !verifyFlywireSig(
      { reference: flywireReference, amount, paymentMethod },
      sig,
      process.env.FLYWIRE_WEBHOOK_SECRET!,
    )
  ) {
    throw createError({ statusCode: 400, statusMessage: "Bad signature" });
  }

  // 2. Подтягиваем платёж из Flywire REST (можно кешировать)
  const payment = await $fetch(
    `https://api.flywire.com/v4/payments/${flywireReference}`,
    {
      headers: { Authorization: `Bearer ${process.env.FLYWIRE_API_KEY}` },
    },
  );

  if (payment && payment?.status !== "success")
    throw createError({
      statusCode: 400,
      statusMessage: "Payment not settled",
    });

  // 3. Решаем, какой email брать
  const email = emailFromClient ?? payment.payer.email;
  if (!email) throw createError({ statusCode: 422, statusMessage: "No email" });

  // 4. Отправляем билет
  const url = await presignPdf(pdfKey);
  await sendTicketEmail(email, url);

  return { ok: true, data: payment };
});
