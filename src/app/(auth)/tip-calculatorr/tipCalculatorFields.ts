
import FormInput from "@/components/form/forminput";

const tipCalculatorFields = [
    {
        component: FormInput,
        name: "bill",
        label: "Bill",
        placeholder: "$",
        rules: {
            required: {
                value: true,
                message: "Mandatory"

            },
        }
    },
    {
        component: FormInput,
        name: "person",
        label: "No. of person",
        placeholder: "0",
        rules: {
            required: {
                value: true,
                message: "Mandatory"

            },
        }
    },
  

 

   
]

export default tipCalculatorFields;