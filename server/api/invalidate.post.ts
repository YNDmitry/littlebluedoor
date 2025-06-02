import { defineEventHandler, getQuery, setResponseStatus } from "h3";

export default defineEventHandler(async (event) => {
  const { path, token, all } = getQuery(event);

  // Безопасность
  if (token !== process.env.INVALIDATE_SECRET) {
    setResponseStatus(event, 401);
    return { error: "Unauthorized" };
  }

  const cache = useStorage("cache"); // Nitro кэш, работает для isr

  if (all === "true") {
    await cache.clear();
    return { ok: true, invalidated: "all" };
  }

  if (!path) {
    setResponseStatus(event, 400);
    return {
      message: "Path query param required, e.g. ?path=/travel-guides/foo",
    };
  }

  await cache.removeItem(path as string, {
    removeMeta: true,
  });
  return { ok: true, invalidated: path };
});
