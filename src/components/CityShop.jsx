import Image from "next/image";
import React from "react";

const CityShop = () => {
  return (
    <div className="min-h-screen relative ">
      <Image
        width={1440}
        height={897}
        className="absolute bottom-0 2xl:w-full pb-[136px] max-lg:h-[525px] max-lg:w-[844px] max-md:-bottom-[15%]"
        src="/assets/images/webp/city-img.webp"
        alt="city image"
      />
      <Image
        width={1440}
        height={889}
        className="absolute bottom-0 2xl:w-full max-lg:w-full"
        src="/assets/images/webp/shop-img.webp"
        alt="shopp image"
      />

      <Image
        width={313}
        height={163}
        className="absolute bottom-7 2xl:w-1/4 left-1/2 -translate-x-1/2 max-lg:h-[147px] max-lg:bottom-0"
        src="/assets/images/webp/shop-poster-img.webp"
        alt="poster image"
      />
    </div>
  );
};

export default CityShop;
