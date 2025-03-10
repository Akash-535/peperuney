import Image from "next/image";
import React from "react";
import BackToEarn from "./BackToEarn";
import CustomMarquee from "@/common/CustomMarquee";

const Pizzanomics = () => {
  return (
    <>
      <div className="relative pt-36 max-w-[1920px] mx-auto max-lg:hidden z-[5]">
        <div className="absolute top-0 left-0 z-[1] w-full bg-[url(/assets/images/webp/pizzanomics-text-bg.webp)] bg-cover bg-no-repeat bg-center h-full max-h-[346px] pt-5 pl-20 max-xl:max-h-80">
          <h3 className="yellow-shadow text-[141px] font-luckiest text-[#893101] leading-[100%] max-xl:text-9xl">
            PIZZANOMICS
          </h3>
        </div>
        <div className="bg-[#DA291C] relative min-h-[514px]">
          <Image
            width={485}
            height={257}
            className="absolute top-1/4 left-12 z-[2] max-xl:w-96"
            src="/assets/images/webp/peperuney-pizzanomics.webp"
            alt="images"
          />
          <div className="absolute bg-black w-full max-w-[812px] h-[341px] text-center flex items-end right-1 justify-center -rotate-1 -top-14 max-xl:max-w-[590px] max-xl:h-[300px]">
            <h3 className="text-white text-[135px] text-shadow font-luckiest max-xl:text-[100px]">
              42 BILLION
            </h3>
          </div>
          <h3 className="text-white text-[80px] font-luckiest absolute bottom-[20%] right-24 -rotate-2 leading-[100%] max-xl:bottom-[30%] max-xl:text-6xl">
            token supply{" "}
          </h3>
          <div className="bg-black absolute -bottom-[14%] -left-2 -rotate-[4deg] w-full max-w-[617px] text-center pt-3 pb-1 max-xl:max-w-[420px]">
            <h3 className="text-white text-shadow text-[92px] leading-[100%] font-luckiest pr-7 max-xl:text-[70px]">
              LP BURNED
            </h3>
          </div>
          <div className="bg-[url(/assets/images/webp/tax-layer.webp)] bg-cover bg-center bg-no-repeat absolute -bottom-[42%] right-0 w-full min-h-[306px] max-w-[942px] max-xl:max-w-[670px] max-xl:min-h-[220px] max-xl:-bottom-[22%]">
            <h3 className="text-[115px] yellow-shadow font-luckiest text-[#893101] text-center pt-9 uppercase max-xl:text-[70px]">
              zero tax
            </h3>
          </div>
        </div>
        <BackToEarn />
      </div>

      <div className="flex flex-col min-h-screen lg:hidden justify-center items-center overflow-hidden relative z-20">
        <div className="w-full relative z-10 bg-[url(/assets/images/webp/pizzanomics-text-bg.webp)] bg-cover bg-no-repeat bg-center h-full min-h-[245px] pt-5 pl-20 max-md:px-2">
          <h3 className="yellow-shadow text-[80px] font-luckiest text-[#893101] leading-[100%] max-md:text-6xl">
            PIZZANOMICS
          </h3>
        </div>
        <div className="bg-black w-full text-center flex items-end justify-center -mt-32 h-[211px] max-md:h-[170px]">
          <h3 className="text-white text-shadow font-luckiest text-[100px] max-md:text-[70px]">
            42 BILLION
          </h3>
        </div>
        <div className="bg-[#DA291C] relative py-4 flex flex-col justify-center items-center -z-10 w-full">
          <h3 className="text-white font-luckiest leading-[100%] max-xl:bottom-[30%] text-6xl text-center pt-4 max-md:text-4xl">
            token supply{" "}
          </h3>
          <Image
            width={370}
            height={257}
            className="z-[2] pt-8 max-md:w-[301px]"
            src="/assets/images/webp/peperuney-pizzanomics.webp"
            alt="images"
          />
        </div>
        <div className="bg-black w-full text-center pt-3 pb-8 flex items-center justify-center">
          <h3 className="text-white text-shadow text-[92px] leading-[100%] font-luckiest pr-7 max-xl:text-[70px] max-md:text-[52px] max-md:pr-0">
            LP BURNED
          </h3>
        </div>
        <div className="bg-[url(/assets/images/webp/tax-layer.webp)] bg-cover bg-center bg-no-repeat w-[942px] min-h-[274px] relative z-50 -mt-6 flex items-center justify-center">
          <h3 className="yellow-shadow font-luckiest text-[#893101] text-center pb-9 uppercase text-[70px] max-md:text-6xl">
            zero tax
          </h3>
        </div>
        <BackToEarn myClass="lg:hidden" />
      </div>
    </>
  );
};

export default Pizzanomics;
