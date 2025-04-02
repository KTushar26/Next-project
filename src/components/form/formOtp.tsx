import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { cn } from '@/lib/utils'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'


type Props = {}

const FormOtp = ({ control, name, rules, label, className, ...props }: Props) => {
    return (
        <>
            <FormField
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <FormItem className={cn("space-y-3", className)}>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <InputOTP maxLength={6} {...field}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    )
}

export default FormOtp;