"use client";
import LogoBrand from "@/components/module/LogoBrand";
import React from "react";

import InstagramIcon from "@/public/assets/icons/instagram-logo.svg";
import TwitterIcon from "@/public/assets/icons/twitter-logo.svg";
import FacebookIcon from "@/public/assets/icons/facebook-logo.svg";

export default function FooterSection() {
  return (
    <div className="border-t border-[#E4E4E4] py-20 px-24 grid grid-cols-2 place-items-start">
      {/* grid 1 */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">
          <LogoBrand />
        </div>
        <div className="w-[260px]">
          <p className="text-[12px] text-gray-400 text-wrap font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            in vestibulum, sed dapibus tristique nullam.
          </p>
        </div>
        <div className="flex gap-5">
          {/* facebook */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9999 1.66666H12.4999C11.3948 1.66666 10.335 2.10564 9.55364 2.88704C8.77224 3.66845 8.33325 4.72825 8.33325 5.83332V8.33332H5.83325V11.6667H8.33325V18.3333H11.6666V11.6667H14.1666L14.9999 8.33332H11.6666V5.83332C11.6666 5.61231 11.7544 5.40035 11.9107 5.24407C12.0669 5.08779 12.2789 4.99999 12.4999 4.99999H14.9999V1.66666Z"
              fill="#41A0E4"
              stroke="#41A0E4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* twitter */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1666 2.49999C18.3686 3.06289 17.485 3.49341 16.5499 3.77499C16.048 3.19791 15.381 2.7889 14.6391 2.60326C13.8972 2.41762 13.1162 2.46432 12.4017 2.73703C11.6871 3.00975 11.0736 3.49532 10.6441 4.12808C10.2145 4.76085 9.98967 5.51027 9.99992 6.27499V7.10832C8.53545 7.14629 7.08431 6.8215 5.77576 6.16286C4.4672 5.50422 3.34185 4.53218 2.49992 3.33332C2.49992 3.33332 -0.833415 10.8333 6.66658 14.1667C4.95036 15.3316 2.90588 15.9158 0.833252 15.8333C8.33325 20 17.4999 15.8333 17.4999 6.24999C17.4991 6.01787 17.4768 5.78632 17.4333 5.55832C18.2838 4.71957 18.8839 3.66058 19.1666 2.49999Z"
              fill="#41A0E4"
              stroke="#41A0E4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* instagram */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1667 1.66666H5.83341C3.53223 1.66666 1.66675 3.53214 1.66675 5.83332V14.1667C1.66675 16.4678 3.53223 18.3333 5.83341 18.3333H14.1667C16.4679 18.3333 18.3334 16.4678 18.3334 14.1667V5.83332C18.3334 3.53214 16.4679 1.66666 14.1667 1.66666Z"
              fill="#41A0E4"
              stroke="#41A0E4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z"
              fill="white"
              stroke="#41A0E4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5833 5.41666H14.5916"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* grid 2 */}
      <div className="grid grid-cols-3 gap-20 text-start">
        {FooterSectionData.map((item, idx) => {
          return (
            <div key={idx} className="flex flex-col">
              <h3 className="text-[18px] font-[400]">{item.section}</h3>
              <ul className="flex flex-col gap-5 mt-4">
                {item.lists.map((list, idx) => {
                  return (
                    <li
                      key={idx}
                      className="font-normal text-[12px] tracking-[25%] leading-3"
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//
const FooterSectionData = [
  {
    section: "Layanan",
    lists: ["BANTUAN", "TANYA JAWAB", "HUBUNGI KAMI", "CARA BERJUALAN"],
  },
  {
    section: "Tentang Kami",
    lists: [
      "ABOUT US",
      "KARIR",
      "BLOG",
      "KEBIJAKAN PRIVASI",
      "SYARAT DAN KETENTUAN",
    ],
  },
  {
    section: "Mitra",
    lists: ["SUPPLIER"],
  },
];
