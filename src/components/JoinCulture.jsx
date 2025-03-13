import { MEDIA_ICON_LIST } from "@/utils/helper";
import { CopyCodeIcon, FormkitSolanaIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinCulture = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="bg-[url(/assets/images/webp/join-culture-bg.webp)] bg-cover bg-center bg-no-repeat min-h-[950px] max-md:min-h-[850px] relative">
        <div className="flex flex-col justify-center items-center pt-[140px] max-lg:pt-20 max-md:pt-[60px]">
          <Image
            width={670}
            height={100}
            src="/assets/images/webp/join-culture-text.webp"
            alt="join culture text"
          />
          <div className="flex gap-4 max-md:gap-2 pt-5">
            {MEDIA_ICON_LIST.map((obj, i) => (
              <Link
                key={i}
                href={obj.link}
                className="bg-[url(/assets/images/webp/icon-bg.webp)] w-full max-w-[100px] p-[23px_31px_25px_35px] bg-cover bg-no-repeat footer-media-icon hover:scale-105 duration-300 ease-linear flex justify-center items-center max-md:px-4 max-md:pt-2 max-md:pb-1"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
        </div>
        <Image
          width={671}
          height={445}
          className="max-w-[675px] absolute top-[60.5%] left-[52%] -translate-x-1/2 -translate-y-1/2 2xl:w-[920px] 2xl:top-[70%] max-md:left-[9%]"
          src="/assets/images/webp/join-culture-man.webp"
          alt="join culture man"
        />
      </div>
      <div className="bg-[url(/assets/images/webp/footer-white-layer.webp)] bg-cover bg-center bg-no-repeat pt-[52px] pb-9 max-xl:pt-20 -mt-12 relative z-10">
        <div className="w-full flex justify-between items-center max-w-[1300px] mx-auto max-xl:flex-col max-xl:justify-center max-xl:gap-6 px-2">
          <p className="text-lg font-normal leading-[150%] text-center">
            Copyright ⓒ {new Date().getFullYear()} Peperuney Pizza. All right
            Reserved
          </p>
          <div className="flex items-center">
            <p className="text-lg font-normal pr-3">
              CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0
            </p>
            <div className="p-2 mr-4 max-md:mr-3 bg-black size-8 cursor-pointer border border-transparent hover:bg-white hover:border-black copy-icon duration-300 ease-linear transition-all">
              <CopyCodeIcon />
            </div>
            <div className="p-2 size-8 cursor-pointer border border-black hover:bg-black hover:border-transparent solana-icon duration-300 ease-linear transition-all">
              <FormkitSolanaIcon />
            </div>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="#"
              className="text-lg font-normal leading-[150%] underline"
            >
              Disclaimer
            </Link>
            <Link
              href="mailto:contact@peperuney.pizza"
              className="text-lg font-normal leading-[150%] underline"
            >
              contact@peperuney.pizza
            </Link>
            <p className="text-lg font-normal leading-[150%] underline">
              White paper
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCulture;
