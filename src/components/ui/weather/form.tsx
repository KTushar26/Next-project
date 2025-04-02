import React from "react";
import { Input } from "../input";
import { Button } from "../button";

const Form = () => {
  return (
    <form action="" className="flex gap-4">
      <Input
        placeholder="Enter City Name..."
        name="cityName"
        className=" border-2 border-red-500 max-w-sm placeholder:font-semibold "
        required
      />
      <Button className=" bg-red-800"> Search </Button>
    </form>
  );
};

export default Form;
