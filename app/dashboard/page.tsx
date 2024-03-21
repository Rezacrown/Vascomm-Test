import Headerdashboard from "@/components/layouts/Dashboard-Header";
import SidebarDashboard from "@/components/layouts/Dashboard-Sidebar";
import DashboardProvider from "@/components/layouts/DashboardProvider";
import CardDashboard from "@/components/module/CardDashboard";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <div className="flex flex-col gap-10">
        <h2 className="">Dashboard</h2>
        {/* dashboard card */}
        <div className="flex justify-around items-center gap-5">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => {
            return <CardDashboard key={i} />;
          })}
        </div>
        {/* product terbaru */}
        <div className="w-[785px] px-8 py-4 bg-white min-h-[300px] rounded-xl">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-[16px] text-[#3A3C58]">
              Produk Terbaru
            </h1>
            <div className="">
              <table className="w-full">
                <thead className="bg-primary w-full">
                  <tr className=" p-2 grid grid-cols-3 gap-10">
                    <th className="text-white ">Produk</th>
                    <th className="text-white">Tanggal Dibuat</th>
                    <th className="text-white">Harga (Rp)</th>
                  </tr>
                </thead>
                <tbody className="w-full mt-5">
                  <tr className=" p-2 grid grid-cols-3 gap-14">
                    <td className="flex justify-start items-center">
                      <Image
                        src={
                          "https://www.bhphotovideo.com/images/images2500x2500/asus_1015e_ds03_10_1_notebook_computer_983610.jpg"
                        }
                        alt="product newer"
                        height={40}
                        width={40}
                        className=""
                      />
                      <span className="">Microsoft Surface 7</span>
                    </td>
                    <td className="">tgl</td>
                    <td className="">price</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
