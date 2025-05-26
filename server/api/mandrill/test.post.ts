import { getMandrillClient } from "~~/server/utils/mandrill";

export default defineEventHandler(async () => {
  const client = getMandrillClient();
  const response = client.messages.sendTemplate({
    template_name: "travel-guide-pdf",
    template_content: [],
    message: {
      global_merge_vars: [
        {
          name: "URL",
          content: "https://flowmetelev.com",
        },
      ],
      from_email: "no-reply@littlebluedoor.io",
      to: [{ email: "mailmetelev@gmail.com" }],
      subject: "Your Travel Guide is ready!",
    },
  });
  return response;
});
