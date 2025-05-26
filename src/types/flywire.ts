import type { NumberField } from "@prismicio/client";

declare global {
  interface Window {
    FlywirePayment: {
      initiate: (config: FlywirePaymentConfig) => {
        render: () => void;
      };
    };
  }
}

export type FlywirePaymentConfig = {
  env: "demo" | "prod";
  recipientCode: string;
  amount: NumberField;
  currency: string;
  requestPayerInfo: boolean;
  requestRecipientInfo: boolean;
  skipCompletedSteps?: boolean;
  payerEmailNotifications: boolean;
  returnUrl?: string;
  onCompleteCallback: (data: any) => void;
  paymentOptionsConfig: {
    sort: { currency: string[] }[];
    filters: {
      type: string[];
      excludedCreditCardsBrands: string[];
    };
  };
  scheduledPayments?: {
    type: "scheduled";
    data: {
      instalments: { amount: NumberField; date: string }[];
    };
  };
  onInvalidInput: (errors: any[]) => void;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  leadPaxFirstName?: string;
  leadPaxLastName?: string;
  termsAndConditions?: boolean;
};

export interface FlywireCallback {
  reference: string;
  status: "success" | "error" | "pending";
  amount: string;
  paymentMethod: string;
  sig: string;
}
