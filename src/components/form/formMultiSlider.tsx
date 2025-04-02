import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";

type Props = {};

const FormMultiSlider = ({
  control,
  name,
  rules,
  label,
  classname,
  ...props
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(classname)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Slider
            //   onBlur={field.onBlur}
            //   value={field.value}
              onValueChange={(value) => {
                const event = {
                  target: {
                    value,
                  },
                };
                field.onChange(event);
              }}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormMultiSlider;
