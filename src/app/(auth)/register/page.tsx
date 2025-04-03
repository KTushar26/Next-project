"use client"

import { useForm } from "react-hook-form"
import CopyForm from "@/components/form/dynamicform"
import registerFormFields from "./registerFormFields"



const Register = () => {
    const form = useForm({
        defaultValues: registerFormFields.reduce((p, c)=>({...p, [c.name]:""}),{})
    })

    const onSubmit = (value) => {
        console.log(value);



    }

    return (
        <div className=" flex felx-col sm:justify-center items-center m-4">
            <CopyForm form={form} onSubmit={onSubmit} formFields={registerFormFields} id="login-form"
            />
        </div>
    )
}

export default Register;