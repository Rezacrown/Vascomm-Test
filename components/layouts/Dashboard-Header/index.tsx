import React from "react";

export default function Headerdashboard() {
  return (
    <div className="px-20 py-6 mb-2 shadow-sm">
      <div className="flex justify-between">
        {/*  */}
        <div className="">
          <h2 className="font-normal">Logo</h2>
        </div>
        {/*  */}
        <div className="flex gap-4 items-center justify-center">
          <div className="">
            <h4 className="text-primary text-[10px] text-end">Hallo Admin,</h4>
            <div className="">
              <h1>Aden S. Putra</h1>
            </div>
          </div>
          <div className="bg-gray-400 rounded-full w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
}
