import React from "react";
  import { Switch } from "@/components/ui/switch";
  import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

  const FormToggle = ({className, control, name, label, rules }: any) => {
    return (
      <FormField
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <FormItem className={cn("flex items-center justify-between" , className)}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    );
  };

  export default FormToggle;