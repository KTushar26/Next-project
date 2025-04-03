import CopyForm from "@/components/form/dynamicform";

const inputFormFields = [
    {
        component: CopyForm,
        name: "email",
        label: "Email Address",
        placeholder: "example",
        rules: {
            required: {
                value: true,
                message: "Email is mandatory"

            },
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please emter valid email address"

            }
        }
    },

    {
        component: CopyForm,
        name: "password",
        label: "Password",
        placeholder: "Minimum 8 characters",
        type: "password",
        rules: {
            required: {
                value: true,
                message: "Password is mandatory"

            },
        }
    },

    // {
    //     name: "age",
    //     label: "Age",
    //     placeholder: "Enter your age",
    //     type: "number"
    // }
]

export default inputFormFields;