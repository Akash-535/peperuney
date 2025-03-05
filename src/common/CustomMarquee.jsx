import { Marquee_List } from "@/utils/helper";
import React from "react";
import Marquee from "react-fast-marquee";

const CustomMarquee = ({ myClass, parentClass }) => {
  return (
    <div
      className={`flex items-center justify-center  bg-red-500 ${parentClass}`}
    >
      <Marquee direction="left">
        {Marquee_List.map((obj, i) => (
          <p
            key={i}
            className={`text-[40px] py-[30px] leading-[100%] font-normal font-luckiest pl-10 text-white text-shadow ${myClass}`}
          >
            {obj}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
