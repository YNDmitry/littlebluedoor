<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { object, string } from "yup";
import { getExampleNumber, type CountryCode } from "libphonenumber-js/max";
import { isValidPhoneNumber } from "libphonenumber-js";
import utils from "intl-tel-input/build/js/utils.js";
import examples from "libphonenumber-js/examples.mobile.json";
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
const { $mail } = useNuxtApp();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const schema = computed(() =>
  object({
    destination: string().required("Destination is a required field"),
    date: string().required("Date is a required field"),
    travelDuration: string().required("Travel duration is a required field"),
    firstName: string().required("First name is a required field"),
    lastName: string().required("Last name is a required field"),
    email: string()
      .email("Enter a valid email")
      .required("Email is a required field"),
    phone: string().test("is-valid", "Enter a valid phone number", () => {
      const instance = telRef.value?.instance;
      return instance ? isValidPhoneNumber(instance.getNumber()) : false;
    }),
    comment: string().required("This is a required field"),
  }),
);

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const isFormSubmitted = useState<boolean>("isFormSubmitted", () => false);

const onSubmit = handleSubmit(async (values) => {
  try {
    const res = await useFetch("/api/forms/form", {
      method: "post",
      body: { values },
    });

    const resMail = await $mail.send({
      from: "Form",
      subject: "Form",
      text: `First name: ${values.firstName}\nLast name: ${values.lastName}\nEmail: ${values.email}\nPhone: ${telRef.value?.instance.getNumber()}\nTravel duration: ${values.travelDuration}\nDate: ${values.date}\nComment: ${values.comment}\n`,
    });

    isFormSubmitted.value = true;

    useRoute().query.from = "submitted";
    if (res && resMail) {
      return navigateTo("/thank-you");
    }
  } catch (error) {
    console.error(error);
  }
});

const { value, setValue } = useField("date");
const { value: phone, setValue: setNumber } = useField<string>("phone");

const iso2 = ref<string>("gb");
const telRef = ref<any>(null);
const isTrimming = ref(false);

function onCountryChange(newIso: string) {
  iso2.value = newIso;
  phone.value = "";
}

/* ----------- лимит цифр для каждой страны ------------ */
const nationalLimit = computed(() => {
  const ex = getExampleNumber(
    iso2.value.toUpperCase() as CountryCode,
    examples,
  );
  return ex ? ex.nationalNumber.length : 15; // fallback
});

const isNumberValid = computed(() => {
  const inst = telRef.value?.instance;
  if (!inst) return false;
  const digits = phone.value;
  const e164 = `+${inst.getSelectedCountryData().dialCode}${digits}`;
  return isValidPhoneNumber(e164);
});

// onInput — всегда парсит через getNumber
function onInput(e: Event) {
  const inputEl = e.target as HTMLInputElement;
  if (isTrimming.value) return;
  let digits = inputEl.value;
  if (isNumberValid.value) {
    digits = digits.slice(0, maxLen.value);
    isTrimming.value = true;
    telRef.value?.instance?.setNumber(digits, "national");
    isTrimming.value = false;
  }

  setNumber(digits);
}

const maxLen = computed(() =>
  isNumberValid.value ? phone.value.length : nationalLimit.value,
);
</script>

<template>
  <section
    class="max-tablet:pt-[50px] py-[60px]"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="mx-auto max-w-[1100px] px-4">
      <h2
        v-if="slice?.primary?.title"
        class="text-center font-[500] uppercase max-tablet:text-[20px] text-[28px]"
      >
        {{ slice?.primary?.title }}
      </h2>

      <p class="pt-4 text-center uppercase">{{ slice?.primary?.paragraph }}</p>

      <ClientOnly>
        <form @submit.prevent="onSubmit" class="mt-[30px]">
          <div class="px-12 max-tablet:px-0 py-8">
            <div class="flex flex-col gap-[30px]">
              <div class="flex max-tablet:flex-col gap-[30px]">
                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <Field
                    class="min-h-[2.8125rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                    type="text"
                    name="destination"
                    placeholder="Where would you like to go?"
                    aria-label="Where would you like to go?"
                  />
                  <ErrorMessage name="destination" class="text-[red]" />
                </div>

                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <DatePicker
                    name="date"
                    @update:model-value="$event = setValue($event)"
                    :model-value="value"
                    placeholder="When would you like to go?"
                    aria-label="When would you like to go?"
                    :pt="{
                      panel: 'text-white rounded-lg',
                      pcInputText: '!bg-transparent text-white rounded-lg',
                    }"
                  />
                  <ErrorMessage name="date" class="text-[red]" />
                </div>

                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <Field
                    class="min-h-[2.8125rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                    type="text"
                    name="travelDuration"
                    placeholder="How long would you like to go for?"
                    aria-label="How long would you like to go for?"
                  />
                  <ErrorMessage name="travelDuration" class="text-[red]" />
                </div>
              </div>

              <div class="flex max-tablet:flex-col gap-[30px]">
                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <Field
                    class="min-h-[2.8125rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <ErrorMessage name="firstName" class="text-[red]" />
                </div>

                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <Field
                    class="min-h-[2.8125rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                  <ErrorMessage name="lastName" class="text-[red]" />
                </div>
              </div>

              <div class="flex max-tablet:flex-col gap-[30px]">
                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <Field
                    class="min-h-[2.8125rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <ErrorMessage name="email" class="text-[red]" />
                </div>

                <div v-auto-animate class="w-full flex flex-col gap-y-2">
                  <IntlTelInput
                    ref="telRef"
                    :value="phone"
                    :inputProps="{
                      class:
                        'min-h-[45px] w-full border-b border-gray-400 bg-transparent text-white rounded-none placeholder-gray-400',
                      name: 'phone',
                    }"
                    :options="{
                      initialCountry: iso2,
                      separateDialCode: true,
                      nationalMode: true,
                      autoPlaceholder: 'aggressive',
                      utilsScript: utils,
                    }"
                    @input="onInput"
                    @changeCountry="onCountryChange"
                  />
                  <ErrorMessage name="phone" class="text-[red]" />
                </div>
              </div>

              <div v-auto-animate class="w-full flex flex-col gap-y-2">
                <Field
                  as="textarea"
                  name="comment"
                  class="min-h-[10.625rem] w-full border-b border-gray-400 bg-transparent rounded-none"
                  placeholder="Any specific comments or requests?"
                />
                <ErrorMessage name="comment" class="text-[red]" />
              </div>
            </div>
          </div>

          <div v-motion-fade-in class="text-center">
            <button
              type="submit"
              class="hover:bg-primary-20 hover:text-white inline-block mx-auto rounded-lg bg-white text-[16px] py-[16px] px-[25px] font-medium text-bg2 transition-colors uppercase"
            >
              <span v-if="!isSubmitting">Request my journey</span>
              <Spiner v-else />
            </button>
          </div>
        </form>
      </ClientOnly>
    </div>
  </section>
</template>

<style>
.iti__country-container {
  padding: 0;
}

.iti__dropdown-content {
  padding: 4px;
  background: #1e1f29;
  border: 0 !important;
}

.iti__country-list {
  background-color: #1e1f29;
  color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #3a3a3a;
  font-family: inherit;
  font-size: 14px;
}

.iti__country-list .iti__country {
  padding: 10px;
}

.iti__country:hover {
  background-color: #2a2a3a;
}

.iti__search-input {
  background-color: #2a2a3a;
  color: #fff;
  border: 1px solid #555;
  border-radius: 0.375rem;
  font-size: 14px;
  padding: 6px 10px;
  width: 100% !important;
  margin-bottom: 4px;
}

.iti__dial-code {
  color: #aaa;
}

.iti--allow-dropdown input,
.iti--separate-dial-code input {
  background-color: transparent;
  color: inherit;
  font-size: inherit;
}

.p-inputtext.p-component.p-datepicker-input {
  @apply !bg-transparent !border-b !border-gray-400 !border-t-0 !text-[#d9d9d9] !border-l-0 !border-r-0 !rounded-none !px-0;
}

.p-inputtext.p-component.p-datepicker-input:hover {
  @apply border-gray-400;
}

.p-inputtext.p-component.p-datepicker-input:focus {
  @apply border-gray-400 shadow-none;
}

.p-datepicker.p-component.p-inputwrapper.p-inputwrapper-focus.p-focus {
  @apply shadow-none outline-none;
}
</style>
