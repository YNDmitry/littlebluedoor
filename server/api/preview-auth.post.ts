export default defineEventHandler(async (event) => {
  const { password } = await readBody<{ password: string }>(event);
  const { previewPassword } = useRuntimeConfig(event);
  if (password === previewPassword) {
    setCookie(event, "preview_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // сутки
    });
    return { ok: true };
  }

  throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
});
