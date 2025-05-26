export default defineNuxtPlugin((nuxtApp) => {
  const isLoading = useLoading();

  nuxtApp.hook("page:start", () => {
    isLoading.value = true;
  });

  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      isLoading.value = false;
    }, 200); // чтобы не моргало, задержка минимальная
  });
});
