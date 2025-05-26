<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { object, string } from "yup";
const settings = useSettings();
const mail = useMail();

const schema = object({
  email: string().email("Enter a valid email").required("Email is a required"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const isFormSubmitted = ref(false);

const toast = useToast();
const global = useSettings();

const onSubmit = handleSubmit(async (values) => {
  try {
    const data = await fetch("/api/forms/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: values.email }),
    });

    const res = await data.json();

    if (res.statusCode === 400) {
      return toast.add({
        severity: "error",
        summary: "Error",
        detail: res.message,
        life: 5000,
      });
    }

    await mail.send({
      from: "Newsletter",
      subject: "Newsletter",
      text: "New newsletter email: " + values.email,
    });
    return (isFormSubmitted.value = true);
  } catch (error: any) {
    const errors = useError();
    return toast.add({
      severity: "error",
      summary: "Error",
      detail: errors?.message,
      life: 5000,
    });
  }
});
</script>

<template>
  <footer
    class="bg-[#3c3f4a] backdrop-blur-md bg-opacity-40 text-white m-2 rounded-lg mt-auto"
  >
    <div class="mx-auto px-4">
      <div class="pb-[20px] pt-[40px]">
        <div class="text-center max-w-[390px] mx-auto">
          <div v-motion-fade-in class="text-[20px] font-medium">
            JOIN OUR MAILING LIST
          </div>
          <p v-motion-fade-in class="mt-4">
            Be the first to hear about upcoming trips, unique destinations, and
            preferred rates.
          </p>
        </div>

        <div
          class="flex items-center justify-center w-full max-w-[450px] mx-auto"
        >
          <form
            v-if="!isFormSubmitted"
            @submit.prevent="onSubmit"
            class="flex h-[75px] pt-6 w-full"
          >
            <div class="flex flex-col w-full h-full relative">
              <Field
                v-motion-fade-in
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                class="w-full bg-white h-full border-b border-gray-400 pl-4 tracking-[3px] text-[12px] text-black rounded-none"
              />
              <ErrorMessage
                name="email"
                class="absolute bottom-[-2rem] text-red"
              />
            </div>

            <button
              v-motion-fade-in
              type="submit"
              class="w-[140px] bg-primary border-primary border text-[14px]"
            >
              <span v-if="!isSubmitting">SUBSCRIBE</span>
              <Spiner v-else />
            </button>
          </form>
          <div v-else class="mt-8">Thank you for subscribing</div>
        </div>

        <div
          v-motion-fade
          v-if="isFilled.group(global?.data.footer_links)"
          class="flex max-tablet:pt-[45px] tablet:pt-[90px] items-center justify-center gap-5"
        >
          <PrismicLink
            v-for="item in global?.data.footer_links[0]?.link"
            :key="item.key"
            :field="item"
            class="text-[1rem] hover:text-white/80 transition-all"
          >
            {{ item.text }}
          </PrismicLink>
        </div>

        <div
          v-motion-fade-in
          class="flex items-center justify-center gap-5 mt-6"
        >
          <PrismicLink
            v-if="isFilled.link(settings?.data?.instagram)"
            :field="settings?.data?.instagram"
            class="hover:scale-125 transition-all"
          >
            <IconsInstagram customClasses="text-white" />
          </PrismicLink>
          <PrismicLink
            v-if="isFilled.link(settings?.data?.whatsapp)"
            :field="settings?.data?.whatsapp"
            class="hover:scale-125 transition-all"
          >
            <IconsWhatsapp customClasses="text-white" />
          </PrismicLink>

          <NuxtLink
            v-if="isFilled.link(settings?.data?.email)"
            :to="'mailto:' + settings?.data?.email?.url"
            class="hover:scale-125 transition-all"
          >
            <IconsMail customClasses="text-white" />
          </NuxtLink>
        </div>
      </div>

      <div
        class="flex items-center justify-center gap-8 text-[14px] text-white max-tablet:flex-col max-tablet:gap-4 max-tablet:pb-4 tablet:h-[50px] tablet:gap-2"
      >
        <div v-motion-fade-in class="uppercase mx-4 text-center">
          ©
          <NuxtTime :datetime="new Date()" year="numeric" format="YYYY" />
          LITTLEBLUEDOOR | ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  </footer>
</template>
