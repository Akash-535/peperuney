"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
const Preloader = () => {
  const [preLoader, setPreloader] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    setTimeout(() => {
      setPreloader(false);
      document.body.style.overflow = "auto";
      document.body.style.position = "unset";
    }, 3500);
  }, []);

  return (
    <div>
      {preLoader ? (
        <div className="bg-[url(/assets/images/webp/faq-bg.webp)] bg-cover bg-center bg-no-repeat fixed inset-0 flex justify-center top-0 left-0 items-center z-[999] min-h-screen overflow-hidden flex-col">
          <div className="text-white text-shadow text-[115px] font-luckiest flex items-center gap-2 max-lg:text-8xl max-md:text-6xl">
            <CountUp start={0} end={100} duration={3.2} delay={0.5} />
            <span>%</span>
          </div>
          <Image
            width={322}
            height={325}
            className="animate-[spin_10s_infinite_linear]"
            src="/assets/images/webp/pizza-img.webp"
            alt="preloader pizza"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
