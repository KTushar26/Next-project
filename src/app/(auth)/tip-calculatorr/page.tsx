"use client"

import { useForm } from "react-hook-form"
import CopyForm from "@/components/form/copyForm"
import tipCalculatorFields from "./tipCalculatorFields"



const Page = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            name: false
        },
    })

    const onSubmit = (value) => {
        console.log(value);



    }

    return (
        <div className="flex felx-col bg-teal-300 h-dvh">
            <div className="  sm:justify-center items-center h-50dvh w-60dvh bg-white">
                <CopyForm form={form} onSubmit={onSubmit} formFields={tipCalculatorFields} id="login-form"
                />
            </div>
        </div>
    )
}

export default Page;