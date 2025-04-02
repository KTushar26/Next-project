import React from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { icons, TrashIcon } from "lucide-react";

type Props = {};

const FormFieldArray = ({ control, name, fieldArray }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });
  return (
    <ul>
      {fields.map((item, index) => (
        <li key={item.id} className="flex gap-4 items-center">
          {fieldArray.map(({ component: Component, name:itemName ,...item }) => {
            return <Component key={item.name} control={control} name={`${name}.${index}.${itemName}`} {...item} />;
          })}
         <Button size="icon" onClick={()=> remove(index)}>
            <TrashIcon/> 
         </Button>
        </li>
      ))}
      <Button type="button" onClick={()=>{
        append(fieldArray.reduce((p, c)=>({...p, [c.name]:""}),{}))
      }}>Add Item</Button>
    </ul>
  );
};

export default FormFieldArray;
