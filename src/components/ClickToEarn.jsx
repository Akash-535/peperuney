import Image from "next/image";
import React from "react";

const ClickToEarn = () => {
  return (
    <>
      <div className="relative bg-[url(/assets/images/webp/casino-bg.webp)] bg-cover bg-no-repeat bg-center min-h-[900px] pt-[100px] max-w-[1920px] mx-auto max-lg:min-h-[1247px] max-lg:pt-[60px]">
        <Image
          width={388}
          height={854}
          className="absolute left-0 bottom-0 max-lg:w-[340px] max-md:w-[279px]"
          src="/assets/images/webp/casino-man.webp"
          alt="casino man"
        />
        <div className="w-full justify-end max-w-[682px] ml-auto mr-[70px] relative z-10">
          <h2 className="text-shadow max-w-[555px] mx-auto text-center text-[80px] text-white leading-[100%] font-luckiest pb-8 max-lg:text-7xl max-md:text-[52px]">
            Click-To-Earn and arcade{" "}
          </h2>
          <div className="bg-[url(/assets/images/webp/casino-text-bg.webp)] bg-cover bg-no-repeat w-full min-h-[358px] p-[27px] pt-12 relative max-lg:min-h-0 max-lg:px-3.5 max-md:max-w-[335px] max-md:mx-auto max-md:min-h-[394px]">
            <Image
              width={250}
              height={105}
              className="absolute left-1/2 -translate-x-1/2 -top-1/4 translate-y-1/2 max-lg:w-[220px] max-md:w-[195px] max-lg:top-[-20%]"
              src="/assets/images/webp/casino-text.webp"
              alt="casino text"
            />
            <p className="max-w-[622px] text-2xl leading-[180%] text-[#0E0E0E] font-normal pt-3.5 max-lg:text-lg max-lg:leading-[140%]">
              HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m
              impressed! Means you’re serious about pizza, vibes, and big-time
              wins. Catch me at the slots or the poker table, always *ALL-IN*
              for that next big score. It’s the thrill, baby—the gamble, the
              grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE!
              Wanna roll with the best? Smash that button, start stackin’ up,
              and show me what you got. FEELS GREAT MAN!
            </p>
          </div>
          <div className="flex gap-7 justify-center items-center pt-10 flex-wrap">
            <Image
              width={241}
              height={74.71}
              className="cursor-pointer hover:scale-105 duration-300 ease-linear  max-md:w-[335px] max-md:h-[74.78px]"
              src="/assets/images/webp/play-now-text.webp"
              alt="play now img"
            />
            <Image
              width={241}
              height={74.71}
              className="cursor-pointer hover:scale-105 duration-300 ease-linear max-md:w-[335px] max-md:h-[74.78px]"
              src="/assets/images/webp/mini-map-text.webp"
              alt="play now img"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1920px] mx-auto h-10 bg-[#8B8581]"></div>
    </>
  );
};

export default ClickToEarn;
