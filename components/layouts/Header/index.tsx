import Image from "next/image";
import React from "react";

import SearchIcon from "@/public/assets/images/search-icon.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LogoBrand from "@/components/module/LogoBrand";

export default function HeaderSection() {
  return (
    <div className="min-h-[70px] mb-2 border-b">
      <div className="py-8 px-4">
        <div className="flex justify-around items-center">
          {/* logo brand */}
          <LogoBrand />
          {/* search input */}
          <div className="w-[662px] flex relative">
            <Input
              name="search"
              placeholder="Cari parfum kesukaanmu"
              type="text"
              //   width={"662px"}
              //   height={"32px"}
              className="rounded-[2px] focus:border-none bg-[#F9F9F9] pr-10"
            />
            <Image
              src={SearchIcon}
              alt=""
              width={20}
              height={20}
              className="inline-block absolute right-0 translate-y-3 -translate-x-3 z-10"
            />
          </div>
          {/* auth section */}
          <div className="">
            <div className="flex gap-x-[10px]">
              <Button
                variant={"outline"}
                className="text-primary border border-primary rounded-[1px] px-[16px] py-[8px]"
              >
                Masuk
              </Button>
              <Button className="rounded-[1px] px-[16px] py-[8px]">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
