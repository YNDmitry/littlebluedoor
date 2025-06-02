import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const cache = useStorage("cache"); // Nitro кэш, работает для isr

  await cache.clear();
  return { ok: true, invalidated: "all" };
});
