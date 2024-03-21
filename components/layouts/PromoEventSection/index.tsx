"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import BannerImage from "@/public/assets/images/banner-01.png";
import BannerImage2 from "@/public/assets/images/product-1.png";

import RightIconSlider from "@/public/assets/images/right-slider.svg";
import LeftIconSlider from "@/public/assets/images/left-slider.svg";

const SLIDER_ITEM = [
  {
    id: 1,
    image: BannerImage,
  },
  {
    id: 2,
    image: BannerImage2,
  },
  {
    id: 3,
    image: BannerImage,
  },
];

export default function PromoEventSection() {
  const [currentImage, setCurrentImage] = useState(SLIDER_ITEM[0]);

  const handleNextImage = () => {
    SLIDER_ITEM.forEach((item, idx) => {
      if (item.id === currentImage.id && idx + 1 < SLIDER_ITEM.length) {
        setCurrentImage(SLIDER_ITEM[idx + 1]);
      }
    });
  };

  const handlePrevImage = () => {
    SLIDER_ITEM.forEach((item, idx) => {
      if (item.id === currentImage.id && idx > 0) {
        setCurrentImage(SLIDER_ITEM[idx - 1]);
      }
    });
  };

  useEffect(() => {
    setCurrentImage(SLIDER_ITEM[0]);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col gapt-4">
        <div className="max-w-[1006px] mx-auto">
          <Image
            src={currentImage.image}
            alt="promo items"
            width={870}
            height={331}
            priority
            className="bg-cover object-cover max-w-[1006px] max-h-[331px] block"
          />
          {/* slider */}
          <div className="mt-8 flex justify-start">
            <Image
              src={LeftIconSlider}
              alt=""
              width={10}
              height={10}
              onClick={handlePrevImage}
            />
            <div className="flex gap-3 justify-center items-center mx-5">
              {SLIDER_ITEM.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-[#A19B91] rounded-full w-[9px] h-[9px]"
                  ></div>
                );
              })}
            </div>
            <Image
              src={RightIconSlider}
              alt=""
              width={10}
              height={10}
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
