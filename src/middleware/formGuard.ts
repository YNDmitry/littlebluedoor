export default defineNuxtRouteMiddleware((to) => {
  if (to.query.form !== "submitted") {
    return navigateTo("/");
  }
});
