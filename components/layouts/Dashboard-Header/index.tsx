"use client";
import { Power } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function Headerdashboard() {
  const session = useSession();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="px-20 py-6 mb-2 shadow-sm">
      <div className="flex justify-between">
        {/*  */}
        <div className="">
          <h2 className="font-normal">Logo</h2>
        </div>
        {/*  */}
        <div className="flex gap-4 items-center justify-center relative">
          <div className="">
            <h4 className="text-primary text-[10px] text-end">Hallo Admin,</h4>
            <div className="">
              <h1> {session.data?.user?.name}</h1>
            </div>
          </div>
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="bg-gray-400 rounded-full w-10 h-10"
          ></div>

          {/* dropdown */}
          {showDropdown && (
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="bg-white rounded-lg z-20 w-max h-max absolute translate-y-[100px] shadow-md"
            >
              <div className="flex flex-col gap-5 items-center text-center justify-center py-3 px-3">
                <div className="bg-gray-400 rounded-full w-10 h-10"></div>
                {/*  */}
                <div className="">
                  <h3 className="font-normal text-sm">
                    {session.data?.user?.name}
                  </h3>
                  <h5 className="font-normal text-[12px] text-wrap">
                    {session.data?.user?.email}
                  </h5>
                  <div className="border-b bg-gray-300 mt-4"></div>
                </div>
                {/*  */}
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => signOut()}
                    className="flex gap-1  items-center justify-center"
                  >
                    <Power className="text-red-500" />
                    <span className="inline-block">Keluar</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
