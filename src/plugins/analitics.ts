import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  import.meta.env.PROD ? inject() : "";
});
