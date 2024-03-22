import DashboardProvider from "@/components/layouts/DashboardProvider";

import CardDashboard from "@/components/module/CardDashboard";
import Image from "next/image";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <div className="flex flex-col gap-10">
        <h2 className="">Dashboard</h2>
        {/* dashboard card */}
        <div className="flex justify-around items-center gap-5">
          {CardDashboardList.map((item, idx) => {
            return (
              <CardDashboard name={item.name} value={item.value} key={idx} />
            );
          })}
        </div>
        {/* product terbaru */}
        <div className="w-[785px] px-8 py-4 bg-white min-h-[300px] rounded-xl overflow-y-scroll">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-[16px] text-[#3A3C58]">
              Produk Terbaru
            </h1>
            <div>
              <Table className="overflow-y-scroll scroll-m-4">
                <TableHeader className="bg-primary ">
                  <TableRow className="">
                    <TableHead className="text-white font-medium">
                      Produk
                    </TableHead>
                    <TableHead className="w-[140px] text-white font-medium">
                      Tanggal Dibuat
                    </TableHead>
                    <TableHead className="w-[160px] text-white font-medium">
                      Harga (Rp)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                {/*  */}
                <TableBody className="overflow-y-scroll">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell className="font-medium flex gap-2 justify-start items-center">
                          <Image
                            src={
                              "https://www.bhphotovideo.com/images/images2500x2500/asus_1015e_ds03_10_1_notebook_computer_983610.jpg"
                            }
                            alt=""
                            height={40}
                            width={40}
                            className=""
                          />
                          Microsoft Surface 7
                        </TableCell>
                        <TableCell className="text-[#A3A6AC]">
                          12 Mei 2023
                        </TableCell>
                        <TableCell className="text-[#1A1111]">
                          Rp5.000.0000
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}

//
const CardDashboardList = [
  {
    name: "Jumlah User",
    value: "150 user",
  },
  {
    name: "Jumlah User Aktif",
    value: "150 user",
  },
  {
    name: "Jumlah Produk",
    value: "150 Produk",
  },
  {
    name: "Jumlah Produk Aktif",
    value: "150 Produk",
  },
];
