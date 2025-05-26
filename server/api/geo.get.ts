export default defineEventHandler(async () => {
  const res: { ip: string; country: string } = await $fetch(
    "https://api.country.is/",
  );
  return { country: res.country };
});
