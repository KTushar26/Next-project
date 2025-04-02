"use client"

import CopyForm from '@/components/form/copyForm'
import { Button } from '@/components/ui/button'
import React from 'react'
import mortageFormFields from './mortageFromFields'
import { useForm } from 'react-hook-form'

type Props = {}

const Page = (props: Props) => {
    const form = useForm({
        defaultValues: {
            amount: "",
            term: "",
            rate: "",
        },
    })

    const onSubmit = (value) => {
        console.log(value);



    }
    return (
        <div className='bg-blue-100 h-dvh w-dvw flex justify-center items-center'>
            <div className='bg-white h-[70dvh] w-[60dvw] flex felx-row rounded-4xl overflow-hidden'>
                <div className='w-[30dvw] p-4 text-[#213E45] m-2'>
                    <div className='flex justify-between '>
                        <div className='text-xl font-bold'>Mortage calculator</div>
                        <div><button className='text-decoration-line: underline'>Clear all</button></div>
                    </div>
                    <CopyForm form={form} onSubmit={onSubmit} formFields={mortageFormFields} id="login-form"
                    />
                    <div className='bg-[#D9DB33] font-bold  flex justify-center gap-2 rounded-4xl w-[300px] p-3'><img src="icon-calculator.svg" alt="" /><button form='login-form'>Calculate Repayments</button></div>
                </div>
                <div className='bg-[#133040] w-[30dvw] rounded-bl-[70px] flex flex-col justify-center items-center text-white' >
                    <div><img src="illustration-empty.svg" alt="" /></div>
                    <div className='text-2xl'>Results shown here</div>
                    <div className='m-5 text-blue-200 '>Complete the form and click "calculate repayments to see what  your monthly repayments would be</div>
                </div>
            </div>
        </div>
    )
}

export default Page