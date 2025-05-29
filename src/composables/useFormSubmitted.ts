export const useFormSubmitted = (value: boolean = false) =>
  useState<boolean>("isFormSubmitted", () => value);
