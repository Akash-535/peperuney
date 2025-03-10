"use client";
import { MEME_GALLERY_LIST } from "@/utils/helper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MemeGallery = () => {
  return (
    <div className="bg-[url(/assets/images/webp/meme-gallery-bg.webp)] max-w-[1920px] mx-auto bg-cover bg-no-repeat relative min-h-[900px] bg-center flex justify-end items-center">
      <div className="flex items-center justify-between gap-10 flex-wrap">
        <div className="max-w-[555px] flex flex-col items-center">
          <h2 className="text-[80px] leading-[100%] text-white text-shadow font-luckiest text-center">
            PEPERUNEY MEME{" "}
          </h2>
          <Image
            width={250}
            height={105}
            className="-mt-4"
            src="/assets/images/webp/gallery-text.webp"
            alt="gallery text"
          />
        </div>
        <Swiper
          spaceBetween={40}
          loop={true}
          slidesPerView={2.5}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {MEME_GALLERY_LIST.map((obj, i) => (
            <SwiperSlide key={i} className="max-w-[280px] max-h-[360px] ">
              <Image
                width={280}
                height={360}
                className="max-w-[280px] max-h-[360px] object-cover"
                src={obj}
                alt="slider poster"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image
        width={678}
        height={411}
        className="absolute bottom-0 left-0"
        src="/assets/images/webp/meme-gallery-man.webp"
        alt="meme man"
      />
    </div>
  );
};

export default MemeGallery;
