export default defineNuxtRouteMiddleware((to) => {
  const isSubmitted = useFormSubmitted();
  if (!isSubmitted) {
    return navigateTo("/");
  }
});
