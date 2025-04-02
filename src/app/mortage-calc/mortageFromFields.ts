import FormInput from "@/components/form/forminput";
import FormRadioGroup from "@/components/form/formRadioGroup";

const mortageFormFields = [
    {
        component: FormInput,
        name: "amount",
        label: "Mortage Amount",
        placeholder: "£",
        rules: {
            required: {
                value: true,
                message: "Amount is mandatory"

            },
        },
        type:"number",
        
    },
    {
        component: FormInput,
        name: "term",
        label: "Mortage Term",
        placeholder: "years",
        rules: {
            required: {
                value: true,
                message: "Year is mandatory"

            },
        },
        type:"number",
        // classname:"grid-row "
    },
    {
        component: FormInput,
        name: "rate",
        label: "Interest Rate",
        placeholder: "%",
        rules: {
            required: {
                value: true,
                message: "Year is mandatory"

            },
        },
        type:"number",
         classname:"col-span-3 "
    },
    {
        component: FormRadioGroup,
        name: "type",
        label: "Mortage Type",
        rules: {
            required: {
                value: true,
                message: "Year is mandatory"

            },
        },
        options: [
            {
                value: "repayment",
                text: "Repayment"
            },
            {
                value: "interest_only",
                text: "Interest only"
            }
        ],
        classname:"flex flex-row h-[40px] w-[300px] border-2 border-[#213E45] p-2 rounded-[4px]"
    },
]

export default mortageFormFields