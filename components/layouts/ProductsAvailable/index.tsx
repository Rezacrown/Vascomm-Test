"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductsAvailable() {
  const [moreList, setMoreList] = useState(10);

  return (
    <div className="pt-16">
      <h3 className="text-[#1F1C17] text-2xl font-bold mb-6">
        Produk Tersedia
      </h3>
      <div className="grid grid-cols-5 gap-[10px]">
        {DATA.map((item, index) => {
          if (index + 1 <= moreList)
            return (
              <Card
                key={index}
                className={`
                    border-0 shadow-none
                    rounded-[1px] bg-white
                    px-5 py-4 hover:border border-[#D6D6D6] transition-all hover:scale-[1.03] hover:cursor-pointer
                `}
                style={{ height: "270px" }}
              >
                <Image
                  src={item.image}
                  alt="product"
                  height={370}
                  width={280}
                  className="bg-cover h-[200px] w-[180px] object-fill object-center"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#1F1C17] font-poppins">
                    {item.name}
                  </h3>
                  <h5 className="text-[#41A0E4] font-bold text-sm">
                    IDR {String(item.price)}
                  </h5>
                </div>
              </Card>
            );
        })}
      </div>
      <div className="mt-10 flex justify-center items-center">
        {moreList >= DATA.length === false && (
          <Button
            variant={"outline"}
            className="text-primary border-primary rounded-[1px] px-4 py-2"
            onClick={() => setMoreList((prev) => prev + 10)}
          >
            Lihat lebih banyak
          </Button>
        )}
      </div>
    </div>
  );
}

const DATA = [
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
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
  {
    id: 1,
    name: "Euodia",
    price: 1000,
    image: "/assets/images/product-1.png",
  },
];
