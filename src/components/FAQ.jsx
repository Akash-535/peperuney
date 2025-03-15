"use client";
import { FAQ_LIST } from "@/utils/helper";
import { MinusIcon, PlusIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const FaqHandler = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <>
      {" "}
      <div className="min-h-[1019px] max-xl:min-h-screen bg-[url(/assets/images/webp/faq-bg.webp)] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center pt-20 pb-[105px] max-xl:pb-20 max-lg:py-16 max-md:py-14 max-w-[1920px] mx-auto px-4">
        <Image
          width={503}
          height={104}
          className="pb-4 max-w-[503px] max-md:w-[280px]"
          src="/assets/images/webp/faq-text-img.webp"
          alt="faq text"
        />
        <div className="w-full flex flex-col gap-[18px] max-w-[685px] mx-auto">
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className={`w-full p-6 pt-0 border border-white bg-[#3030304D] rounded-[10px] ${
                open === i ? "flex flex-col gap-4" : ""
              }`}
            >
              <div
                onClick={() => FaqHandler(i)}
                className="cursor-pointer w-full flex justify-between items-center pt-[18px]"
              >
                <p className="text-white text-[32px] font-normal leading-[100%] max-lg:text-2xl max-md:max-w-[239px]">
                  {obj}
                </p>
                <span
                  className={` duration-500 ease-linear ${
                    open === i ? "rotate-180" : "rotate-90"
                  }`}
                >
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
              <div
                className={` overflow-hidden max-xl:overflow-y-auto duration-500 ease-linear ${
                  open === i ? "max-h-[161px]" : "max-h-0"
                }`}
              >
                <p className="text-white text-2xl leading-[180%] max-lg:text-xl max-lg:leading-[140%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-10 bg-[#8B8581] border-y-4 border-black max-w-[1920px] mx-auto"></div>
    </>
  );
};

export default FAQ;
