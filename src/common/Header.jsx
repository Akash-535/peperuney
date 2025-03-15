"use client";
import { FLAGS_LIST, MEDIA_ICON_LIST } from "@/utils/helper";
import { DropDownIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [selectedFlag, setSelectedFlag] = useState(FLAGS_LIST[0]);
  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
  };

  return (
    <div className="max-w-[1300px] 2xl:max-w-[1920px] flex items-center mx-auto pt-[30px] w-full justify-between px-4 gap-4 max-sm:px-3 max-md:pt-4">
      <Link href="#">
        <Image
          width={262}
          height={75}
          className="max-w-[262px] object-cover max-lg:w-full hover:scale-105 duration-300 ease-linear"
          src="/assets/images/webp/logo.webp"
          alt="logo"
        />
      </Link>
      <div className="flex gap-10 justify-end items-center max-lg:gap-7 max-md:gap-4 max-sm:gap-2">
        <div className="flex items-center gap-3 cursor-pointer max-md:gap-1.5 group pb-2">
          <div>
            <Image
              width={41}
              height={31}
              src={selectedFlag}
              alt="selected flag"
            />
          </div>
          <DropDownIcon />
          <div className="absolute bg-black shadow-lg p-2 rounded-md mt-48 mr-2 hidden group-hover:block">
            {FLAGS_LIST.map((flag, i) => (
              <div
                key={i}
                onClick={() => handleFlagChange(flag)}
                className="cursor-pointer p-1 hover:scale-105"
              >
                <Image width={41} height={31} src={flag} alt="flag" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 max-md:gap-1">
          {/* Media Icons */}
          {MEDIA_ICON_LIST.map((obj, i) => (
            <Link
              key={i}
              href={obj.link}
              target="_blank"
              className="bg-[url(/assets/images/webp/icon-bg.webp)] w-full max-w-[77px] p-[17px_22px_18px_23px] media-icon hover:scale-105 duration-300 ease-linear max-lg:max-w-16 flex justify-center items-center max-md:px-4 max-md:pt-2 max-md:pb-1"
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
