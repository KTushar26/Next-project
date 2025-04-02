import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type Props = {}

const FormInput = ({control, name , rules , label, classname,...props}: Props) => {
  return (
    <FormField
    control={control}
    name={name}
    rules={rules}
    render={({ field }) => (
        <FormItem className={cn(classname)}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input {...field} {...props} />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>
  )
}

export default FormInput