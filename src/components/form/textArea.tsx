import React from "react";

import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Textarea } from "../ui/textarea";



const FormTextArea = ({className, control, name, rules, label, ...props }) => {
  return (
    <FormField
    control={control}
    name={name}
    rules={rules}
    render={({ field }) => (
      <FormItem className={cn(className)}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={label}
            className="resize-none"
            {...field}
          />
        </FormControl>
      </FormItem>
    )}
  />
  );
};

export default FormTextArea;