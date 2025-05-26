export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = MAILCHIMP_API_KEY?.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

  try {
    const data: {
      status: number;
      statusCode: string;
      title: string;
      detail: string;
    } = await $fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: {
        email_address: email,
        status: "subscribed",
      },
    });

    console.log(data);

    if (
      data.status === 200 ||
      data.status === 201 ||
      data.statusCode === "subscribed"
    ) {
      return { statusCode: 200, email };
    } else if (data.title === "Member Exists") {
      return setResponseStatus(event, 400, "Email already subscribed");
    } else {
      return setResponseStatus(event, data.status, data.detail);
    }
  } catch (error: any) {
    console.error(error);
    return setResponseStatus(event, 400, "Error");
  }
});
