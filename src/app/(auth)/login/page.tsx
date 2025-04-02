"use client"

import { useForm } from "react-hook-form"

import CopyForm from "@/components/form/copyForm"
import inputFormFields from "./inputFormFields"


const Login = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            remember: false
        },
    })

    const onSubmit = (value) => {
        console.log(value);
    }

    return (
        <div className="h-screen flex sm:justify-center items-center">
            <CopyForm form={form} onSubmit={onSubmit} formFields={inputFormFields} id="login-form"
            />
        </div>
    )
}

export default Login