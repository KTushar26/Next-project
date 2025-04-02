import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { cn } from '@/lib/utils'

type Props = {}

const FormRadioGroup = ({ control, name, rules, label, options, classname }: Props) => {
    return (
        <FormField
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {options.map(x=> <FormItem key={x.value} className={cn(classname)}>
                  <FormControl>
                    <RadioGroupItem value={x.value} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {x.text}
                  </FormLabel>
                </FormItem>)}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
}

export default FormRadioGroup;