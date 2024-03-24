"use client";
import Image from "next/image";
import React, { useState } from "react";

import SearchIcon from "@/public/assets/images/search-icon.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LogoBrand from "@/components/module/LogoBrand";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function HeaderSection() {
  const router = useRouter();
  const queryParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    const searchParams = queryParams.get("search");

    if (!searchParams) {
      router.push(`${pathname}`);
    }

    router.push(`${pathname}?search=${search}`);
  };

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
              onChange={(e) => setSearch(e.currentTarget.value)}
              //   width={"662px"}
              //   height={"32px"}
              className="rounded-[2px] focus:border-none bg-[#F9F9F9] pr-10"
            />
            <button
              onClick={handleSearch}
              className="inline-block absolute cursor-pointer focus:outline-primary transition-all right-0 translate-y-3 -translate-x-3 z-10"
            >
              <Image
                src={SearchIcon}
                alt=""
                width={20}
                height={20}
                // className="inline-block absolute cursor-pointer  rounded-full transition-all right-0 translate-y-3 -translate-x-3 z-10"
              />
            </button>
          </div>
          {/* auth section */}
          <div className="">
            <div className="flex gap-x-[10px]">
              <Link href={"/login"}>
                <Button
                  variant={"outline"}
                  className="text-primary border border-primary rounded-[1px] px-[16px] py-[8px]"
                >
                  Masuk
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button className="rounded-[1px] px-[16px] py-[8px]">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
