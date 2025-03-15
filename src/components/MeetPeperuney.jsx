import Image from "next/image";
import React from "react";
import CityShop from "./CityShop";

const MeetPeperuney = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        width={1920}
        height={268}
        className="absolute -top-1 left-0 2xl:w-full pointer-events-none max-lg:h-[201px] max-lg:w-full"
        src="/assets/images/webp/cloud-top-pizza.webp"
        alt="pizza"
      />
      <Image
        width={356}
        height={173}
        className="absolute left-[2%] top-[26%] max-lg:top-[13%] max-md:w-[187px] max-md:left-0"
        src="/assets/images/webp/cloud-img-one.webp"
        alt="cloud"
      />
      <Image
        width={332}
        height={256}
        className="absolute right-[7%] top-[15%] max-lg:top-[6%] max-lg:right-0 max-md:hidden"
        src="/assets/images/webp/cloud-img-two.webp"
        alt="cloud"
      />
      <Image
        width={236}
        height={182}
        className="absolute top-1/2 right-[8%]"
        src="/assets/images/webp/cloud-img-three.webp"
        alt="cloud"
      />
      <Image
        width={184}
        height={144}
        className="absolute top-1/2 left-[8%]"
        src="/assets/images/webp/cloud-img-three.webp"
        alt="cloud"
      />
      <div className="sticky -top-[20%] min-h-[1031px] pt-[264px] xl:pb-[345px] max-xl:-top-[40%] max-lg:pb-[200px] max-xl:pt-60 max-lg:pt-52 max-md:pt-48">
        <div className="flex w-full sticky top-0 max-xl:flex-col-reverse px-5">
          <Image
            width={580}
            height={530}
            className="pointer-events-none w-5/12 object-cover max-xl:w-full max-xl:max-w-[580px] max-xl:absolute max-xl:top-[80%] max-lg:top-[75%] z-10 max-xl:left-1/2 max-xl:-translate-x-1/2"
            src="/assets/images/gif/cloud-peperuney.gif"
            alt="image"
          />
          <div className="w-7/12 max-xl:w-full flex flex-col items-center justify-center">
            <h2 className="text-[80px] font-luckiest text-shadow text-white text-center max-xl:text-6xl max-lg:text-[52px] max-xl:pb-3">
              MEET PepeRuney
            </h2>
            <div className="relative w-full min-h-[509px] max-w-[715px] flex flex-col items-center justify-center pt-4 pl-16 pr-10 pb-2 max-lg:pr-6 max-md:pl-4 max-md:pr-2.5 max-md:min-h-[540px]">
              <Image
                width={715}
                height={509}
                className="object-cover absolute top-1/2 -translate-y-1/2 left-0 -z-[1] max-md:min-h-[540px]"
                src="/assets/images/webp/text-border-img.webp"
                alt="image"
              />
              <Image
                width={337.24}
                height={102.61}
                className="absolute -top-12 left-1/2 -translate-x-1/2 max-lg:w-[240px] max-md:w-[195px] max-md:h-[77px] max-lg:-top-6"
                src="/assets/images/webp/pizza-guy-board.webp"
                alt="pizza board"
              />
              <p className="text-2xl leading-[41px] max-w-[624px] border-b border-[#0E0E0E] pb-4 max-lg:text-xl max-lg:leading-9 max-md:leading-7 max-md:max-w-[336px] max-md:pb-2">
                The pizza-slingin’, joint-tokin’, all-in degen fresh from the
                Matt Furie multiverse, here to leave his greasy mark on the
                memeverse one slice at a time. PepeRuney's the king of
                high-stakes and low-stress vibin’. Spot the red hat and polo?
                You know it’s pizza time, baby! Whether he’s hustlin’ for the
                next big score or chillin’ with the Boys Club, PepeRuney
                guarantees one thing: the vibes and the dough are always rollin’
              </p>
              <div className="pt-5 flex w-full justify-between items-center max-md:pt-3">
                <p className="text-[32px] max-lg:text-2xl">FEELS GREAT MAN!</p>
                <Image
                  width={268}
                  height={74}
                  className="max-xl:w-full max-xl:max-w-56 max-lg:max-w-48 max-md:max-w-32"
                  src="/assets/images/webp/manfrsto-img.webp"
                  alt="manfrost"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CityShop />
    </div>
  );
};

export default MeetPeperuney;
