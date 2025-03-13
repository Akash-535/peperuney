"use client";
import Image from "next/image";
import React, { useState } from "react";

const Toons = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="sticky top-0 min-h-0">
      <div className="min-h-[900px] max-w-[1920px] mx-auto relative bg-[url(/assets/images/webp/toons-bg.webp)] bg-cover bg-center">
        <div className="w-full items-center max-w-[555px] ml-auto flex flex-col pr-[110px] pt-[110px] max-lg:pt-[55px] max-lg:mx-auto max-lg:pr-0">
          <h2 className="text-shadow font-luckiest text-[80px] text-white leading-[100%] max-lg:text-6xl max-md:text-[52px]">
            $PEPERUNEY
          </h2>
          <Image
            width={250}
            height={105}
            className="-mt-5 max-lg:w-[200px] max-lg:-mt-2 max-md:w-[147px] max-md:-mt-2 max-md:rotate-6"
            src="/assets/images/webp/toons-text-img.webp"
            alt="text image"
          />
        </div>
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="max-w-[477px] w-full max-h-[339px] min-h-[339px] absolute top-[59%] left-[46%] -translate-x-1/2 -translate-y-1/2 cursor-pointer max-xl:left-[44.5%]"
        >
          {playVideo ? (
            <iframe
              src="https://www.youtube.com/embed/5BBTghKXjDE?si=EbTdN99ohJZcmUcL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" w-full min-h-[339px] rounded-3xl"
            />
          ) : (
            <Image
              width={477}
              height={339}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/assets/images/webp/toons-tv-img.webp"
              alt="tv img"
            />
          )}
        </div>
        <Image
          width={668}
          height={524}
          className="absolute bottom-0 right-0"
          src="/assets/images/webp/toons-man.webp"
          alt="man image"
        />
      </div>
    </div>
  );
};

export default Toons;
