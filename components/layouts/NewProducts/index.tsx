"use client";
import React from "react";

// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { NextArrow, PrevArrow } from "./arrow";
import { config } from "@/config";

type PropsData = {
  data: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
};

export default function NewProducts({ data }: { data: any[] }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="h-12 w-4" />,
    prevArrow: <PrevArrow className="h-12 w-4" />,
  };

  return (
    <div className="mt-16">
      <h3 className="text-[#1F1C17] text-2xl font-bold mb-6">Terbaru</h3>
      <div className="slider-container">
        <div className="">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  className={`
                    border-0 shadow-none
                    rounded-[1px] bg-white
                    p-4 hover:border border-[#D6D6D6] transition-all hover:p-5 hover:cursor-pointer
                `}
                  style={{ height: "270px" }}
                >
                  <Image
                    src={`${config.baseUrl}/${item.image}`}
                    alt="product"
                    height={280}
                    width={280}
                    className="bg-cover h-[200px] w-[180px] object-coverd object-center"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#1F1C17] font-poppins">
                      {item.name}
                    </h3>
                    <h5 className="text-[#41A0E4] font-bold text-sm">
                      IDR {Number(item.price).toLocaleString("id-ID")}
                    </h5>
                  </div>
                </Card>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const DATA: PropsData["data"] = [
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 2,
    name: "Euodia",
    price: 3000,
    image: "/assets/images/product-2.png",
  },
  {
    id: 3,
    name: "product 1",
    price: 3000,
    image: "/assets/images/product-2.png",
  },
  {
    id: 3,
    name: "product 1",
    price: 3000,
    image: "/assets/images/product-2.png",
  },
  {
    id: 3,
    name: "product 1",
    price: 3000,
    image: "/assets/images/product-2.png",
  },
  {
    id: 3,
    name: "product 1",
    price: 3000,
    image: "/assets/images/product-2.png",
  },
];
