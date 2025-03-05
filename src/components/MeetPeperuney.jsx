import Image from "next/image";
import React from "react";

const MeetPeperuney = () => {
  return (
    <div className="relative">
      <Image
        width={1920}
        height={268}
        className="absolute top-0 left-0 2xl:w-full"
        src="/assets/images/webp/cloud-top-pizza.webp"
        alt="pizza"
      />
    </div>
  );
};

export default MeetPeperuney;
