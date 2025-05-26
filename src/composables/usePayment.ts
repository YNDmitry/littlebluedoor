import type { NumberField } from "@prismicio/client";
import type { FlywirePaymentConfig, FlywireCallback } from "@t/index";

const formatDate = (d: Date) =>
  `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;

export const useBuildFlywireConfig = ({
  price,
  paymentCode,
  currency,
  returnUrl,
  scheduledPayments,
  withTravelInfo = false,
}: {
  price: NumberField;
  paymentCode?: string;
  currency?: string;
  returnUrl: string;
  scheduledPayments?: FlywirePaymentConfig["scheduledPayments"];
  withTravelInfo?: boolean;
}): FlywirePaymentConfig => {
  const env = import.meta.dev ? "demo" : "prod";
  const recipientCode = import.meta.dev ? "DLB" : (paymentCode ?? "DPB");

  const config: FlywirePaymentConfig = {
    env,
    recipientCode,
    amount: scheduledPayments ? 0 : price,
    currency: currency ?? "USD",
    requestPayerInfo: true,
    requestRecipientInfo: true,
    payerEmailNotifications: true,
    skipCompletedSteps: import.meta.dev,
    onCompleteCallback: async (data: FlywireCallback) => {
      if (data.status === "success") {
        useState("thank-you", () => data.status);
        console.log(data);
        try {
          // await $fetch("/api/order/complete", {
          //   method: "POST",
          //   body: {
          //     flywireReference: data.reference,
          //     amount: data.amount,
          //     paymentMethod: data.paymentMethod,
          //     sig: data.sig,
          //   },
          // });
          return navigateTo(returnUrl);
        } catch (error) {
          console.error(error);
        }
      } else if (data.status === "error") {
        throw showError({
          status: 400,
          statusMessage:
            "There was an error while processing the payment. Try again later",
          message:
            "There was an error while processing the payment. Try again later",
        });
      }
    },
    paymentOptionsConfig: {
      sort: [{ currency: ["local"] }],
      filters: {
        type: ["credit_card"],
        excludedCreditCardsBrands: ["amex"],
      },
    },
  };

  if (import.meta.dev) {
    Object.assign(config, {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@flywire.com",
      phone: "+44 1234 567 890",
      address: "Test Address",
      city: "Test City",
      state: "AZ",
      zip: "12345",
      country: "US",
      termsAndConditions: true,
    });
  }

  if (withTravelInfo) {
    Object.assign(config, {
      recipientFields: {
        lead_pax_first_name: "none",
        lead_pax_last_name: "none",
        terms_and_conditions: false,
      },
    });
  }

  if (scheduledPayments) {
    config.scheduledPayments = scheduledPayments;
  }

  return config;
};

export const usePayBalance = async (
  price: NumberField,
  paymentCode: string,
  currency: string,
  returnUrl: string,
) => {
  if (!import.meta.client) return;

  const config = useBuildFlywireConfig({
    price,
    paymentCode,
    currency,
    returnUrl,
    withTravelInfo: returnUrl.includes("travel"),
  });

  const modal = window.FlywirePayment.initiate(config);
  modal.render();
};

export const usePayDeposit = async (
  price: NumberField,
  paymentCode: string,
  currency: string,
  bDate: any,
  returnUrl: string,
): Promise<true | string> => {
  if (!import.meta.client) return "client only";

  const today = new Date();
  const balanceDate = new Date(bDate);

  const isPast = balanceDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);

  if (isPast) {
    return "The balance date is less than the current date.";
  }

  const scheduledPayments = {
    type: "scheduled" as const,
    data: {
      instalments: [
        { amount: price, date: formatDate(today) },
        { amount: price, date: formatDate(balanceDate) },
      ],
    },
  };

  const config = useBuildFlywireConfig({
    price,
    paymentCode,
    currency,
    returnUrl,
    scheduledPayments,
  });

  const modal = window.FlywirePayment.initiate(config);
  modal.render();
  return true;
};
