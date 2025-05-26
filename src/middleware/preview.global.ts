export default defineNuxtRouteMiddleware(() => {
  const config = useRuntimeConfig();
  const auth = useCookie("preview_auth");

  if (!config.public.previewEnabled || !auth.value) return;

  usePreviewMode({
    shouldEnable: () => true,
  });
});
