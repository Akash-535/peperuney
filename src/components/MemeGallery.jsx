"use client";
import { MEME_GALLERY_LIST } from "@/utils/helper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MemeGallery = () => {
  return (
    <>
      <div className="lg:hidden bg-[#ACA79B] w-full p-10 flex justify-center items-center">
        <div className="max-w-[555px] flex flex-col items-center">
          <h2 className="text-[80px] leading-[100%] text-white text-shadow font-luckiest text-center max-lg:text-6xl max-md:text-[52px]">
            PEPERUNEY MEME{" "}
          </h2>
          <Image
            width={250}
            height={105}
            className="-mt-4 max-md:w-[184px] max-md:h-[76px] max-lg:-mt-2"
            src="/assets/images/webp/gallery-text.webp"
            alt="gallery text"
          />
        </div>
      </div>
      <div className="bg-[url(/assets/images/webp/meme-gallery-bg.webp)] max-w-[1920px] mx-auto bg-cover bg-no-repeat relative min-h-[900px] max-lg:min-h-screen max-md:min-h-[581px] max-lg:items-start max-lg:pt-[30px] bg-center flex justify-end items-center">
        <div className="flex items-center justify-between gap-10 flex-wrap">
          <div className="max-w-[555px] flex flex-col items-center max-lg:hidden">
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
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay]}
            breakpoints={{
              60: {
                slidesPerView: 1,
                spaceBetween: 6,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: true,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {MEME_GALLERY_LIST.map((obj, i) => (
              <SwiperSlide key={i} className="max-w-[280px] max-h-[360px]">
                <Image
                  width={280}
                  height={360}
                  className="max-w-[280px] max-h-[360px] object-cover max-lg:max-w-[224px] max-lg:max-h-[260px]"
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
    </>
  );
};

export default MemeGallery;
