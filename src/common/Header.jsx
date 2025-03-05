import { MEDIA_ICON_LIST } from "@/utils/helper";
import { MediaIconBg } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1300px] 2xl:max-w-[1920px] flex items-center mx-auto pt-[30px] w-full justify-between px-4 gap-4">
      <Link href="#">
        <Image
          width={262}
          height={75}
          className="max-w-[262px] object-cover max-lg:w-full"
          src="/assets/images/webp/logo.webp"
          alt="logo"
        />
      </Link>
      <div className="flex gap-10 justify-end items-center max-lg:gap-7 max-md:gap-4">
        {/* <select name="" id="">
            <object data="" type=""></object>
        </select> */}
        <Image
          width={41}
          height={31}
          className="max-w-[41px] object-cover h-[31px] max-lg:max-w-8 max-lg:max-h-6"
          src="/assets/images/webp/eng-flag.webp"
          alt="eng flag"
        />
        <div className="flex gap-2 max-md:gap-1">
          {MEDIA_ICON_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              className="bg-[url(/assets/images/webp/icon-bg.webp)] w-full max-w-[77px] p-[17px_22px_18px_23px] media-icon duration-1000 ease-in-out max-lg:max-w-16 flex justify-center items-center max-md:px-4 max-md:pt-2 max-md:pb-1"
            >
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
