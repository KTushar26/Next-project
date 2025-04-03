"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FormSelect from "@/components/form/formSelect";
import { Button } from "@/components/ui/button";
import formFields from "./tipFormFields";
import CopyForm from "@/components/form/dynamicform";
import TipDisplay from "@/components/tip-calc/subPart";


const TipCalculator = () => {
    const form = useForm({
        defaultValues: formFields.reduce(
          (p, c) => ({ ...p, [c.name]: "" }),
          {}
        ),
      });

 

  const onSubmit = (data) => {

    console.log(data)
  
  };

 

  return (
    <div className=" flex justify-center items-center bg-[#c5e4e7] w-full h-screen">

        <div className=" w-xl rounded-xl aspect-video p-4 bg-white   flex md:flex-row flex-col">
           <div className=" ">
           <CopyForm form={form} onSubmit={onSubmit} formFields={formFields} className=" flex flex-col gap-6 justify-center "  />
           </div>
           <TipDisplay /> 




        </div>
    
 
   
    </div>
  );
};

export default TipCalculator;


{/* <DynamicForm form={form} onSubmit={onSubmit} formFields={formFields}  />
<div className="mt-4">
  <p>Tip Amount per person: ${tipAmount}</p>
  <p>Total per person: ${totalAmount}</p>
</div> */}

// <Button  className=" w-75 "
// type="submit"
// form="login-form">Reset</Button>