export default defineEventHandler(async (event) => {
  const body = await readRawBody(event);
  const sig = getHeader(event, "x-flywire-signature");

  // verifyFlywireSignature(body, sig, process.env.FLYWIRE_SECRET); // сам напиши :)

  const {
    status,
    paymentId,
    payer: { email },
  } = JSON.parse(body);

  if (status === "COMPLETED") {
    // const pdf = await presignPdf(`tickets/${paymentId}.pdf`);
    // await sendTicketEmail(email, pdf);
  }
  return { ok: true };
});
