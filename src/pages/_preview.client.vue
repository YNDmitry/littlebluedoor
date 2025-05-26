<script setup lang="ts">
definePageMeta({
  layout: "preview",
});
const route = useRoute();
const pwd = ref("");
const error = ref(false);

useSeoMeta({
  title: "Preview authorization | Littlebluedoor",
});

async function login() {
  const res: any = await $fetch("/api/preview-auth", {
    method: "post",
    body: { password: pwd.value },
  });

  if (res.value?.ok) {
    return navigateTo((route.query.redirect as string) || "/");
  } else {
    error.value = true;
  }
}
</script>

<template>
  <div class="mx-auto max-w-sm py-10">
    <h1 class="text-2xl mb-4">Staging / Preview</h1>

    <form @submit.prevent="login" v-auto-animate>
      <input
        v-model="pwd"
        type="text"
        placeholder="Password"
        class="min-h-[2.8125rem] text-center w-full border-b border-gray-400 bg-transparent rounded-none"
      />
      <button
        type="submit"
        class="hover:bg-primary-20 hover:text-white inline-block mx-auto rounded-lg bg-white text-[16px] py-[0.5rem] px-[25px] mt-4 w-full font-medium text-bg2 transition-colors uppercase"
      >
        Let me in
      </button>

      <p v-if="error" class="text-red-600 mt-3">Wrong password</p>
    </form>
  </div>
</template>
