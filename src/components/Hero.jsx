import CustomMarquee from "@/common/CustomMarquee";
import Header from "@/common/Header";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[850px] bg-[url('/assets/images/webp/hero-background.webp')] bg-cover bg-no-repeat bg-center relative">
      <Header />
      <div className="flex justify-center items-center pt-16 pb-[34px]">
        <Image
          width={777}
          height={283}
          src="/assets/images/webp/hero-text-img.webp"
          alt="hero text img"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={356}
          className="absolute bottom-0 left-0 2xl:w-full"
          src="/assets/images/gif/pizza-boy-hero.gif"
          alt="hero pizza boy"
        />
      </div>
    </div>
  );
};

export default Hero;
