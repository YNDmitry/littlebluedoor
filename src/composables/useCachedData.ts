export const useCacheData = (key: string, nuxtApp: any) =>
  nuxtApp.payload.data[key] || nuxtApp.static.data[key];
