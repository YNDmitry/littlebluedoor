import mailchimpTx from "@mailchimp/mailchimp_transactional";

const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY!;
const mandrill = mailchimpTx(MANDRILL_API_KEY);

export function getMandrillClient() {
  return mandrill;
}

export async function sendTicketEmail(to: string, url: string) {
  const message = {
    template_name: "travel-guide-pdf",
    template_content: [],
    message: {
      from_email: "no-reply@littlebluedoor.io",
      to: [{ email: to }],
      subject: "Your Travel Guide is ready!",
      global_merge_vars: [{ name: "URL", content: url }],
    },
  };
  await mandrill.messages.sendTemplate(message);
}
