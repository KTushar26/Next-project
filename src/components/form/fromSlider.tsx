import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const FormSlider = ({ className, control, name, label, min = 0, max = 100, step = 1, rules }: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
             <div className="flex items-center justify-between">
            <FormLabel>{label}</FormLabel>
            <span className="text-sm font-medium text-gray-700">{field.value}</span> {/* Value Display */}
          </div>
          
          <FormControl>
            <Slider 
              min={min} 
              max={max} 
              step={step} 
              defaultValue={[field.value || min]} 
              onValueChange={(val) => field.onChange(val[0])} 
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormSlider;