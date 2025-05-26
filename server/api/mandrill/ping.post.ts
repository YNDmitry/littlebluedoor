import { getMandrillClient } from "~~/server/utils/mandrill";

export default defineEventHandler(async () => {
  const client = getMandrillClient();
  const response = client.users.ping();
  return response;
});
