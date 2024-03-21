"use client";
import React from "react";

import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { HouseIcon, NotebookIcon, UserIcon } from "./icon";

export default function SidebarDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="w-[245px] h-screen">
      <ul className="flex flex-col">
        {MenuList.map((menu, idx) => {
          return (
            <Link href={menu.href} key={idx}>
              <li
                className={`${
                  pathname === menu.href
                    ? "bg-primary text-white "
                    : "text-[#1A1111] bg-white"
                } font-poppins px-6 py-3 w-full rounded-[1px] flex gap-2 items-center justify-start`}
              >
                {<menu.icon isActive={pathname === menu.href} />}
                {menu.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}

const MenuList = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: HouseIcon,
  },
  {
    title: "Management User",
    href: "/management-user",
    icon: UserIcon,
  },
  {
    title: "Management Produk",
    href: "/management-product",
    icon: NotebookIcon,
  },
];
