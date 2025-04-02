import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import FormInput from "./forminput";
import { Button } from "../ui/button";

type Props = {};

const CopyForm = ({ form, onSubmit, formFields, id }: Props) => {
  return (
    <div>
      <Form {...form}>
        <form
          id={id}
          onSubmit={form.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  sm:min-w-sm p-4"
        >
          <div className="space-y-4">
            {formFields.map(({ component: Component, ...item }) => {
              return <Component key={item.name} control={form.control} {...item} />;
            })}
          </div>
        </form>
      </Form>
      <Button
        disabled={!form.formState.isValid}
        type="submit"
        className="w-full"
        form="login-form"
      >
        Register
      </Button>
    </div>
  );
};

export default CopyForm;
