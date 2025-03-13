"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const setHendler = () => {
    setScrollToTop(window.scrollY > 200);
  };
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  });
  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed border-0 z-50 bottom-3 right-3 hover:animate-bounce cursor-pointer"
        >
          <Image
            width={40}
            height={40}
            src="/assets/images/webp/back-to-top.webp"
            alt="back to top image"
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
