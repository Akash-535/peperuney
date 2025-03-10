import { OUR_PARTNERS_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPartners = () => {
  return (
    <div className="min-h-[822px] bg-[url(/assets/images/webp/shutter-gate.webp)] max-[1410px]:bg-cover 2xl:bg-cover bg-contain w-full max-w-[1920px] mx-auto bg-no-repeat flex justify-center items-center flex-col max-lg:pb-[60px] max-lg:pt-16">
      <div className="flex flex-col justify-center items-center w-full ">
        <h2 className="text-white text-[80px] font-luckiest uppercase leading-[100%] text-shadow text-center max-lg:text-6xl max-md:text-[52px] max-md:max-w-[277px] mx-auto">
          our partners
        </h2>
        <Image
          width={444}
          height={73}
          className="-mt-4 max-lg:w-[350px] max-md:w-[250px] max-md:-mt-2"
          src="/assets/images/webp/we-work-text.webp"
          alt="we work text"
        />
      </div>
      <div className="flex gap-14 pt-[100px] justify-center items-center flex-wrap max-lg:gap-12 max-md:gap-10 max-xl:pt-20 max-lg:pt-14 max-md:pt-4">
        {OUR_PARTNERS_LIST.map((obj, i) => (
          <Link href={obj.link} target="_blank" key={i}>
            <Image
              width={360}
              height={140}
              className="hover:scale-105 duration-300 ease-linear max-lg:w-[300px] max-md:w-[236px]"
              src={obj.image}
              alt="our partners"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
