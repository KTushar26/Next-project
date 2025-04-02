
import FormInput from "@/components/form/forminput";
import { Value } from "@radix-ui/react-select";
import { kMaxLength } from "buffer";

const cardFormFields = [
  {
    component: FormInput,
    name: "cardholderName",
    label: "CARDHOLDER NAME",
    placeholder: "e.g. Jane Appleseed",
    rules: {
      required: { value: true, message: "Name is mandatory" },
      
    },
    className: "col-span-3  ",
    labelClassName: " text-xs  font-grotesk  ",
    inputClass:"p-5 border-2"
  },
  {
    component: FormInput,
    name: "cardNumber",
    label: "CARD NUMBER",
    placeholder: "e.g. 1234 5678 9123 0000",
    rules: {
      required: { value: true, message: "Card number is mandatory" },
      kMaxLength : 16,
      // minLength: { value: 16, message: "Must be 16 digits" },
      // maxLength: { value: 16, message: "Maximum 16 digits allowed" },
      
      
      pattern: {
        value: /^[0-9]/,
        message: "Wrong format, numbers only",
      },
    },
    className: "col-span-3",
    labelClassName: "  text-xs font-grotesk",
    inputClass:"p-5 border-2"
  },
  {
    component: FormInput,
    name: "expMonth",
    label: "EX.MONTH",
    placeholder: "MM",
    type: "text",
    rules: {
      required: { value: true, message: "Month is mandatory" },
      pattern: {
        value: /^(0[1-9]|1[0-2])$/,
        message: "Invalid month",
      },
    },
    className: "",
    labelClassName: "  text-xs font-grotesk",
    inputClass:"p-5 border-2"
  },
  {
    component: FormInput,
    name: "expYear",
    label: "EX.YEAR",
    placeholder: "YY",
    type: "text",
    rules: {
      required: { value: true, message: "Year is mandatory" },
      pattern: {
        value: /^[0-9]{2}$/,
        message: "Invalid year",
      },
    },
    className: "",labelClassName: " text-xs font-grotesk",
    inputClass:"p-5 border-2"
  },
  {
    component: FormInput,
    name: "cvv",
    label: "CVV",
    placeholder: "e.g. 123",
    type: "text",
    rules: {
      required: { value: true, message: "CVV is mandatory" },
      pattern: {
        value: /^[0-9]{3,4}$/,
        message: "Invalid CVC",
      },
    },
    className: "",
    labelClassName: "  text-xs font-grotesk",
    inputClass:"p-5 border-2"
  },
];

export default cardFormFields;
