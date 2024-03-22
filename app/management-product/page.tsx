// "use client";
import React, { useEffect, useState } from "react";

import DashboardProvider from "@/components/layouts/DashboardProvider";

import { ManagementUserTable } from "@/components/tables/UserManagementTable";
import { columns, ManagementProduct } from "./columns";
import { Button } from "@/components/ui/button";
import { ManagementProductTable } from "@/components/tables/ProductManagementTable";

import { Create } from "./create";

async function getData(): Promise<ManagementProduct[]> {
  // Fetch data from your API here.
  let data: ManagementProduct[] = [];

  Array.from({ length: 20 }, (_, i) => i + 1).forEach((i) => {
    data.push({
      id: String(i),
      name: "produck ke - " + i,
      price: String(
        Math.floor(Math.random() * (1000000000 - 9999999999 + 1)) + 9999999999
      ),
      status: i % 2 == 0 ? "aktif" : "tidak aktif",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/asus_1015e_ds03_10_1_notebook_computer_983610.jpg",
    });
  });

  return data;
}

//
export default async function ManagementUserPage() {
  const data = await getData();

  return (
    <DashboardProvider>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center rounded-[1px]">
          <h3 className="font-medium text-lg">Management Produk</h3>

          <Create />
        </div>
        <div className="card">
          <ManagementProductTable columns={columns} data={data} />
        </div>
      </div>
    </DashboardProvider>
  );
}
