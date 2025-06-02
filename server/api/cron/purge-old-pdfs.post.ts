import { ListObjectsV2Command, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { s3 } from "@server/utils/S3";

export default defineEventHandler(async (event) => {
  const authHeader = event.headers.get("authorization");
  if (
    !process.env.CRON_SECRET ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    setResponseStatus(event, 401);
    return {
      success: false,
    };
  }

  const { Contents } = await s3.send(
    new ListObjectsV2Command({
      Bucket: process.env.S3_BUCKET!,
      Prefix: "travel-guides/",
    }),
  );

  const tenDays = 1000 * 60 * 60 * 24 * 10;
  const doomed = (Contents ?? []).filter(
    (o) => Date.now() - new Date(o.LastModified!).getTime() > tenDays,
  );

  if (doomed.length)
    await s3.send(
      new DeleteObjectsCommand({
        Bucket: process.env.S3_BUCKET!,
        Delete: { Objects: doomed.map((o) => ({ Key: o.Key! })) },
      }),
    );

  setResponseStatus(event, 200, "Success");
  return {
    success: false,
  };
});
