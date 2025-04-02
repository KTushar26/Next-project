
import FormInput from "@/components/form/forminput";
import FormRadioGroup from "@/components/form/formRadioGroup";


const formFields = [
    {
      component: FormInput,
      name: "bill",
      label: "Bill Amount",
      type: "number",
      placeholder: "$",
    },
    {
      component: FormRadioGroup,
      name: "tip",
      label: "Select Tip %",
      
      options: [
        { text: "5%", value: "5" },
        { text: "10%", value: "10" },
        { text: "15%", value: "15" },
        { text: "25%", value: "25" },
        { text: "50%", value: "50" },
        { text: "Custom", value: "Custom" },
      ],
      
    },
    {
      component: FormInput,
      name: "people",
      label: "Number of People",
      type: "number",
      placeholder: "",
    },
  ];

  export default formFields ;