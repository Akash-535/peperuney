import { COMPANY_ICON_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackToEarn = ({ myClass }) => {
  return (
    <>
      <div
        className={`max-xl:hidden relative min-h-[1190px] bg-[url(/assets/images/webp/back-to-earn-bg.webp)] bg-cover bg-no-repeat bg-center -z-10 ${myClass}`}
      >
        <div className="absolute top-[20%] flex justify-center items-center flex-col left-[15%] z-10">
          <div className="relative">
            <p className="text-[32px] text-white absolute right-2 rotate-[24deg] font-normal leading-[100%] top-8">
              Click on me
            </p>
            <Image
              width={500}
              height={370}
              src="/assets/images/webp/cooking-machine.webp"
              alt="machine"
            />
          </div>
          <h3 className="text-white font-luckiest text-shadow text-[80px] uppercase pt-4">
            bake to earn
          </h3>
          <Image
            width={313}
            height={97}
            className="pt-4 hover:scale-110 ease-linear duration-300 relative cursor-pointer"
            src="/assets/images/webp/earn-now-text.webp"
            alt="earn now img"
          />
        </div>

        <Image
          width={656}
          height={828}
          className="absolute right-0 top-[20%]"
          src="/assets/images/webp/green-pizza-man.webp"
          alt="pizza man"
        />
        <div className="w-full absolute bottom-0 bg-[url(/assets/images/webp/table-pizzanomics.webp)] bg-cover bg-center bg-no-repeat min-h-[534px] flex justify-center items-end">
          <div className="flex gap-14 pb-10 flex-wrap max-xl:bg-gradient-to-b max-xl:from-[#A22F27] max-xl:to-[#3C110E] max-xl:gap-9 max-xl:pt-9 max-xl:pb-20 max-xl:justify-center">
            {COMPANY_ICON_LIST.map((obj, i) => (
              <Link key={i} href={obj.link} target="_blank">
                <Image
                  width={360}
                  height={140}
                  className="cursor-pointer hover:scale-110 duration-300 ease-linear max-xl:w-[236px]"
                  src={obj.icon}
                  alt="company icon"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden w-full overflow-hidden relative min-h-[1112px] bg-[url(/assets/images/webp/back-to-earn-bg.webp)] bg-cover bg-no-repeat bg-center -z-10 flex-col flex justify-center items-center pt-32 -mt-28 ${myClass}`}
      >
        <div className="flex justify-center items-center flex-col z-10">
          <div className="relative">
            <p className="text-[32px] text-white absolute right-2 rotate-[24deg] font-normal leading-[100%] top-8">
              Click on me
            </p>
            <Image
              width={500}
              height={370}
              className="max-md:w-[422px]"
              src="/assets/images/webp/cooking-machine.webp"
              alt="machine"
            />
          </div>
          <h3 className="text-white font-luckiest text-shadow text-[60px] max-md:text-[52px] uppercase pt-4">
            bake to earn
          </h3>
          <Image
            width={335}
            height={74}
            className="pt-4 hover:scale-110 ease-linear duration-300 relative cursor-pointer "
            src="/assets/images/webp/earn-now-mobile.webp"
            alt="earn now img"
          />
        </div>
        <Image
          width={468}
          height={607}
          className="pt-3"
          src="/assets/images/webp/green-pizza-man.webp"
          alt="pizza man"
        />
        <div className="flex gap-14 w-full pb-10 relative z-10 flex-wrap max-xl:bg-gradient-to-b max-xl:from-[#A22F27] max-xl:to-[#3C110E] max-xl:gap-9 pt-9 max-xl:pb-20 max-xl:justify-center">
          {COMPANY_ICON_LIST.map((obj, i) => (
            <Link key={i} href={obj.link} target="_blank">
              <Image
                width={360}
                height={140}
                className="cursor-pointer hover:scale-110 duration-300 ease-linear max-xl:w-[236px]"
                src={obj.icon}
                alt="company icon"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackToEarn;
