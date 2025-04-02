import React from "react";

type Props = {};

const CardPreview = ({ formData }) => {
  console.log("Printing card Data");
  console.log(formData);

  return (
    <div className=" relative w-full   -z-20 flex-1 md:bg-[url('/bg-main-desktop.png')]  bg-[url('/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center flex flex-col-reverse md:flex-col items-end  ">

      <div className=" absolute w-55 rounded-sm  top-[55%] right-[20%] -z-10 md:left-[30%] md:top-[13%] md:rounded-xl p-5  md:w-md aspect-video   bg-[url('/bg-card-front.png')]   bg-no-repeat bg-cover bg-center flex flex-col  justify-center   ">
        <div>
          <img src="/card-logo.svg" alt="" className=" w-[30%] md:w-[20%]" />
        </div>
        <div>
          <p className=" tracking-widest md:mt-8 mt-4 text-white font-grotesk font-semibold mb-1 text-[12px] md:text-2xl  ">
            {formData.cardNumber || "0000 0000 0000 0000"}
          </p>
        </div>
        <div className="flex justify-between   text-white font-grotesk font-semibold mt-1  md:mt-5">
          <p className="text-[10px]  md:text-sm uppercase line-clamp-1">
            {formData.cardholderName || "Jane Appleseed"}
          </p>
          <p className="text-[10px]  md:text-sm">
            {formData.expMonth || "00"}/{formData.expYear || "00"}
          </p>
        </div>
      </div>

      <div className=" bg-gray-300 text-black p-4  mt-4 shadow-lg  w-55  md:w-md rounded-sm absolute md:left-[53%]  -z-20   md:rounded-xl bottom-[12%]  md:bottom-[10%] aspect-video bg-[url('/bg-card-back.png')] bg-no-repeat bg-cover bg-center  right-[5%] ">
        <div className=" p-3 md:p-2 absolute text-right md:bottom-[42%] md:right-[7%] right-[5%] bottom-[33%]  ">
          <p className="text-sm text-white md:text-xl font-grotesk tracking-normal">
            {formData.cvc || "000"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
