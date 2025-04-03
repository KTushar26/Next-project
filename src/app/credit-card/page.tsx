"use client";
import React, { useState } from "react";
import cardFormFields from "./cardFormFields";
import { useForm } from "react-hook-form";
// import { onSubmit } from "../actions";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CardPreview from "@/components/card/cardPreview";
import SuccessCard from "@/components/card/successCard";
import CopyForm from "@/components/form/dynamicform";

type Props = {};

const page = (props: Props) => {
  // const [formData , setFormData] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    defaultValues: cardFormFields.reduce(
      (p, c) => ({ ...p, [c.name]: "" }),
      {}
    ),
  });
  const formData = form.watch();

  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:justify-center   ">
      <CardPreview formData={formData} />

      <div className="  flex-[2.4] flex items-center flex-col md:justify-center md:w-[480px] md:ml-[20%]  mt-17 gap-5  ">
        {isSubmitted ? (
          <SuccessCard />
        ) : (
          <CopyForm
            form={form}
            onSubmit={handleSubmit}
            formFields={cardFormFields}
            id="login-form"
            className=" max-w-md grid  grid-cols-3 sm:grid-cols-2 md:grid-cols-3 "
          />
        )}

        <Button
          className=" w-75  md:w-103 p-8 bg-[#220930] border-[#220930] border-2 hover:text-[#220930] hover:bg-white"
          type="submit"
          form="login-form"
        >
          {isSubmitted ? "Continue" : "Confirm"}
        </Button>
      </div>
    </div>
  );
};

export default page;
