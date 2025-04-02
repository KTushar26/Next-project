import FormCheckboxGroup from "@/components/form/formCheckboxgroup";
import FormCheckbox from "@/components/form/formCheckboxgroup";
import FormComboBox from "@/components/form/formCombobox";
import FormDatePicker from "@/components/form/formDatePicker";
import FormFieldArray from "@/components/form/formFieldArray";
import FormFileUpload from "@/components/form/formFileUpload";
import FormInput from "@/components/form/forminput";
import FormMultiSlider from "@/components/form/formMultiSlider";
import FormOtp from "@/components/form/formOtp";
import FormRadioGroup from "@/components/form/formRadioGroup";
import FormSelect from "@/components/form/formSelect";
import FormTimePicker from "@/components/form/formTImePicker";
import FormToggle from "@/components/form/formToggle";
import FormSlider from "@/components/form/fromSlider";
import FormTextArea from "@/components/form/textArea";

const registerFormFields = [
  {
    component: FormInput,
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "Name is mandatory",
      },
    },
  },
  {
    component: FormFileUpload,
    name: "profile_picture",
    label: "Profile Picture",
    rules: {
      required: {
        value: true,
        message: "Profile picture is required",
      },
    },
    className: "col-span-3",
    labelClassName: "text-blue-700",
  },
  // {
  //   component: FormInput,
  //   name: "chooseFile",
  //   label: "Choose File",
  //   placeholder: "No file chosen",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "File is mandatory",
  //     },
  //   },
  //   type:"file",
  //   className:"gap-4"
  // },
  {
    component: FormInput,
    name: "email",
    label: "Email Address",
    placeholder: "example@gmail.com",
    rules: {
      required: {
        value: true,
        message: "Email is mandatory",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please emter valid email address",
      },
    },
  },
  {
    component: FormOtp,
    name: "otp",
    label: "Input Otp",
    // placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "Plsss enter otp",
      },
    },
  },

  {
    component: FormInput,
    name: "password",
    label: "Password",
    placeholder: "Minimum 8 characters",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mandatory",
      },
    },
  },

  {
    component: FormSelect,
    name: "gender",
    label: "Gender",
    placeholder: "Select your gender",
    options: [
      {
        value: "male",
        text: "Male",
      },
      {
        value: "female",
        text: "Female",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gneder is mandatory",
      },
    },
  },
  {
    component: FormRadioGroup,
    name: "marital_status",
    label: "Marital status",
    placeholder: "Select your status",
    options: [
      {
        value: "married",
        text: "Married",
      },
      {
        value: "unmarried",
        text: "Unmarried",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mandatory",
      },
    },
  },
  {
    component: FormCheckboxGroup,
    name: "Check",
    placeholder: "Check it",
    label: "Select interested country",
    rules: {
      required: {
        value: true,
        message: "Please select it",
      },
    },
    options: [
      {
        value: "india",
        text: "India",
      },
      {
        value: "srilanka",
        text: "Srilanka",
      },
      {
        value: "america",
        text: "America",
      },
    ],
  },
  {
    component: FormComboBox,
    name: "language",
    label: "Select Langugage",
    placeholder: "Please select language",
    rules: {
      required: {
        value: true,
        message: "Langugage is mandatory",
      },
    },
    options: [
      {
        value: "english",
        text: "English",
      },
      {
        value: "gujarati",
        text: "Gujarati",
      },
      {
        value: "hindi",
        text: "Hindi",
      },
      {
        value: "marathi",
        text: "Marathi",
      },
    ],
  },
  {
    component: FormDatePicker,
    name: "data",
    label: "Date",
    // placeholder: "Select the date",
    rules: {
      required: {
        value: true,
        message: "Date is mandatory",
      },
    },
  },
  {
    component: FormTimePicker,
    name: "timme",
    label: "Time",
    // placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "TIme is mandatory",
      },
    },
  },
  {
    component: FormMultiSlider,
    name: "age",
    label: "Age",
    // placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "It is mandatory",
      },
    },
    defaultValue:[25,50],
    max:100,
    min:0,
    step:1
  },
  {
    component: FormToggle,
    name: "mode",
    label: "Mode",
    // placeholder: "Select the mode",
    rules: {
      required: {
        value: true,
        message: "Mode is mandatory",
      },
    },
  },
  {
    component: FormTextArea,
    name: "bio",
    label: "Bio",
    // placeholder: "Tell about yourself",
    rules: {
      required: {
        value: true,
        message: "Bio is mandatory",
      },
    },
  },
  {
    component: FormFieldArray,
    name:"productItems",
    label:"Product Items",
    fieldArray:[
        {
            component: FormInput,
            name: "itemName",
            label: "Item Name",
            placeholder: "Item name",
            rules: {
              required: {
                value: true,
                message: "Item is mandatory",
              },
            },
          },
        {
            component: FormInput,
            name: "quantity",
            label: "Qty",
            placeholder: "Quantity",
            rules: {
              required: {
                value: true,
                message: "Quantity is mandatory",
              },
            },
          },
        {
            component: FormInput,
            name: "price",
            label: "Price",
            placeholder: "₹",
            rules: {
              required: {
                value: true,
                message: "Price is mandatory",
              },
            },
          },
    ]
  }
];

export default registerFormFields;
