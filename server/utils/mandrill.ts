import mailchimpTx from "@mailchimp/mailchimp_transactional";

const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY!;
const mandrill = mailchimpTx(MANDRILL_API_KEY);

export function getMandrillClient() {
  return mandrill;
}
