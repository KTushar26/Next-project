import React from "react";
import { Button } from "@/components/ui/button";

const TipDisplay = () => {
  return (
    <div className="bg-teal-900 text-teal-300 p-6 rounded-lg md:flex-1 flex flex-col justify-around gap-5  ">
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-sm font-semibold">Tip Amount</span>
          <span className="text-xl font-bold">$4.27</span>
        </div>
        <p className="text-xs text-teal-400">/ person</p>
      </div>
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-xl font-bold">$32.79</span>
        </div>
        <p className="text-xs text-teal-400">/ person</p>
      </div>
      <Button  className="w-full bg-teal-400 text-teal-900 py-5 px-5 rounded-lg font-bold">
        RESET
      </Button>
    </div>
  );
};

export default TipDisplay;
