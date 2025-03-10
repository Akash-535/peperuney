import { HOW_BUY_LIST } from "@/utils/helper";
import { CopyCodeIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const HowBuy = () => {
  return (
    <div className="bg-[#06754E] relative z-10 ">
      <Image
        width={1841}
        height={195}
        className=" top-0 2xl:w-full"
        src="/assets/images/webp/clouds-img.webp"
        alt="clouds image"
      />
      <div className="bg-white min-h-srceen pt-[50px] -mt-0.5">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[80px] font-luckiest text-center max-xl:text-6xl max-lg:text-[52px] text-shadow text-white">
            how to buy{" "}
          </h2>{" "}
          <Image
            width={359}
            height={73}
            className="-mt-10 max-xl:-mt-5 max-lg:w-[300px] max-lg:-mt-3 max-md:w-[231px]"
            src="/assets/images/webp/peperuney-board-img.webp"
            alt="board"
          />
          <div className="relative overflow-hidden w-full mt-14 max-lg:mt-10 max-md:mt-8 max-w-[1445px] mx-auto min-h-[985px] bg-[url(/assets/images/webp/pizza-box.webp)] bg-cover bg-no-repeat bg-center px-5">
            <div className="flex gap-9 justify-center max-lg:flex-wrap max-lg:gap-y-0 max-md:pt-20">
              {HOW_BUY_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`${
                    i === 1
                      ? "pt-[146px] max-lg:pt-20 max-md:pt-14"
                      : "pt-[250px] max-xl:pt-[146px] max-lg:pt-20 max-md:pt-14"
                  }`}
                >
                  <div className="w-full max-w-[322px] border-4 border-black pb-5 px-4 pt-12 bg-white mx-auto max-xl:px-3 max-md:px-2.5">
                    <p
                      className={`text-[54px] text-white bg-black font-luckiest max-w-[85px] leading-[100%] -rotate-[5deg] mx-auto -mt-24 max-xl:text-5xl max-lg:text-4xl max-lg:-mt-20 max-lg:text-center  ${
                        i === 0
                          ? "p-[11.27px_15.82px] max-lg:py-2 max-lg:px-3"
                          : "p-[16.25px] max-lg:p-3.5"
                      }`}
                    >
                      {obj.cardNumber}
                    </p>
                    <h3 className="font-luckiest text-[40px] text-center leading-[100%] pt-2.5 max-xl:text-4xl max-lg:text-3xl max-md:text-[26px] tracking-normal">
                      {obj.heading}
                    </h3>
                    <p className="text-center pt-2.5 text-lg">
                      {obj.description}
                    </p>
                  </div>
                  {i === 1 && (
                    <div className="mb-8 mt-6 border-4 border-black bg-white p-3 relative z-10 flex gap-3 items-center max-lg:hidden">
                      <p className="text-lg whitespace-nowrap">
                        CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0
                      </p>
                      <div className="p-2 bg-black size-8 cursor-pointer border border-transparent hover:bg-white hover:border-black copy-icon duration-300 ease-linear transition-all">
                        <CopyCodeIcon />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Image
              width={1220}
              height={1013}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite]  max-xl:w-[1187px] max-xl:-bottom-1/2 max-xl:top-auto max-lg:-bottom-[34%] max-md:-bottom-[18%]"
              src="/assets/images/webp/pizza-img.webp"
              alt="pizza-img"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-6 pb-4 max-md:pt-4 max-md:pb-3 bg-[url(/assets/images/webp/pizza-box-pattern.webp)] bg-cover bg-center bg-no-repeat">
        <Image
          width={403}
          height={95}
          className="max-lg:w-[300px] max-md:w-[261px]"
          src="/assets/images/webp/pattren-logo.webp"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default HowBuy;
