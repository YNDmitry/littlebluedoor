export default defineNuxtRouteMiddleware((to, from) => {
  const isSuccess = useState("thank-you");

  if (!isSuccess.value) {
    return navigateTo("/");
  }
});
