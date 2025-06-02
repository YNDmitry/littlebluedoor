import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const isLocal = process.env.S3_ENDPOINT?.includes("localhost");

export const s3 = new S3Client({
  region: process.env.S3_REGION ?? "us-east-1", // MinIO игнорирует, но пусть будет
  endpoint: process.env.S3_ENDPOINT, // http://localhost:9000
  forcePathStyle: isLocal, // Бакет в path, иначе MinIO ждёт DNS-bucket
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
});

const TEN_DAYS_SEC = 60 * 60 * 24 * 10; // 864 000
// AWS S3 v4 подписывает максимум 7 сут. — решай, ок ли тебе 7 дней.
const EXPIRES = Math.min(TEN_DAYS_SEC, 60 * 60 * 24 * 7);

export async function presignPdf(key: string) {
  const cmd = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key, // например "rome.pdf"
  });

  return getSignedUrl(s3, cmd, { expiresIn: EXPIRES });
}
