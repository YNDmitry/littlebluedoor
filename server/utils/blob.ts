import { put, del, list } from "@vercel/blob";

/** загружаем готовый PDF и получаем URL */
export async function uploadPdf(buf: Buffer, paymentId: string) {
  const { url } = await put(`tickets/${paymentId}.pdf`, buf, {
    contentType: "application/pdf",
  }); // токен BLOB_READ_WRITE_TOKEN в env
  return url; // строка вида https://xxx.public.blob.vercel-storage.com/...
}

/** чистим всё старше 3 суток */
export async function purgeOldPdfs() {
  const { blobs } = await list({ prefix: "tickets/" });
  const threeDays = 1000 * 60 * 60 * 24 * 3;

  const expired = blobs
    .filter((b) => Date.now() - new Date(b.uploadedAt).getTime() > threeDays)
    .map((b) => b.url);

  if (expired.length) await del(expired);
}
