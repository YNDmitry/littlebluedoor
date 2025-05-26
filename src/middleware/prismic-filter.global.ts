export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/api/")) {
    return; // Пропускаем middleware
  }
});
