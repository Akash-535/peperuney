import Image from "next/image";
import React from "react";

const MeetPeperuney = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        width={1920}
        height={268}
        className="absolute -top-1 left-0 2xl:w-full pointer-events-none"
        src="/assets/images/webp/cloud-top-pizza.webp"
        alt="pizza"
      />
      <div className="relative min-h-[1031px] pt-[264px]">
        <div className="flex w-full sticky top-0 max-xl:flex-col-reverse">
          <Image
            width={580}
            height={530}
            className="pointer-events-none w-5/12 object-cover max-xl:w-full max-xl:max-w-[580px] max-xl:absolute max-xl:top-[80%] z-10 max-xl:left-1/2 max-xl:-translate-x-1/2"
            src="/assets/images/gif/cloud-peperuney.gif"
            alt="image"
          />
          <div className="w-7/12 max-xl:w-full flex flex-col items-center justify-center">
            <h2 className="text-[80px] font-luckiest text-white text-center">
              MEET PepeRuney
            </h2>
            {/* <div className="bg-[url(/assets/images/webp/text-border-img.webp)] pt-4 pl-16 pr-10 flex flex-col items-center justify-center bg-cover bg-no-repeat w-full min-h-[552px] max-w-[765px] relative">
              <Image
                width={337.24}
                height={102.61}
                className="absolute -top-12 left-1/2 -translate-x-1/2"
                src="/assets/images/webp/pizza-guy-board.webp"
                alt="pizza board"
              />
              <p className="text-2xl leading-[43px] max-w-[624px] border-b border-[#0E0E0E] pb-5">
                The pizza-slingin’, joint-tokin’, all-in degen fresh from the
                Matt Furie multiverse, here to leave his greasy mark on the
                memeverse one slice at a time. PepeRuney's the king of
                high-stakes and low-stress vibin’. Spot the red hat and polo?
                You know it’s pizza time, baby! Whether he’s hustlin’ for the
                next big score or chillin’ with the Boys Club, PepeRuney
                guarantees one thing: the vibes and the dough are always rollin’
              </p>
              <div className="pt-5 flex w-full justify-between items-center">
                <p className="text-[32px]">FEELS GREAT MAN!</p>
                <Image
                  width={268}
                  height={74}
                  className="max-md:hidden"
                  src="/assets/images/webp/manfrsto-img.webp"
                  alt="manfrost"
                />
              </div>
            </div> */}
            <div className="relative w-full min-h-[509px] max-w-[715px] flex flex-col items-center justify-center pt-4 pl-16 pr-10 pb-2">
              <Image
                width={715}
                height={509}
                className="object-contain absolute top-1/2 -translate-y-1/2 left-0 -z-[1]"
                src="/assets/images/webp/text-border-img.webp"
                alt="image"
              />
              <Image
                width={337.24}
                height={102.61}
                className="absolute -top-12 left-1/2 -translate-x-1/2"
                src="/assets/images/webp/pizza-guy-board.webp"
                alt="pizza board"
              />
              <p className="text-2xl leading-[41px] max-w-[624px] border-b border-[#0E0E0E] pb-4">
                The pizza-slingin’, joint-tokin’, all-in degen fresh from the
                Matt Furie multiverse, here to leave his greasy mark on the
                memeverse one slice at a time. PepeRuney's the king of
                high-stakes and low-stress vibin’. Spot the red hat and polo?
                You know it’s pizza time, baby! Whether he’s hustlin’ for the
                next big score or chillin’ with the Boys Club, PepeRuney
                guarantees one thing: the vibes and the dough are always rollin’
              </p>
              <div className="pt-5 flex w-full justify-between items-center">
                <p className="text-[32px]">FEELS GREAT MAN!</p>
                <Image
                  width={268}
                  height={74}
                  className="max-md:hidden"
                  src="/assets/images/webp/manfrsto-img.webp"
                  alt="manfrost"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetPeperuney;
