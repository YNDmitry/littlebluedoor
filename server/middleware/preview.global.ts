export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const url = event.node.req.url || "";
  const pathname = url.split("?")[0];

  const isApi = pathname.startsWith("/api/");
  const isPreviewPage = pathname === "/_preview";

  // ⛔ Не вмешиваемся в API-запросы
  if (isApi) {
    return;
  }

  // ⛔ Если preview отключён — блокируем и саму preview-страницу
  if (!config.public.previewEnabled) {
    if (isPreviewPage) {
      return sendRedirect(event, "/");
    }

    return; // Всё остальное пропускаем
  }

  const cookies = parseCookies(event);
  const auth = cookies.preview_auth;

  if (!auth) {
    if (isPreviewPage) return;

    if (url.includes("/_preview?redirect=")) return;

    return sendRedirect(event, `/_preview?redirect=${encodeURIComponent(url)}`);
  }

  event.context.preview = true;
});
