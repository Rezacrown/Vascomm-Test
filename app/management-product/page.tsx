// "use client";
import React, { useEffect, useState } from "react";

import DashboardProvider from "@/components/layouts/DashboardProvider";

import { columns, ManagementProduct } from "./columns";
import { ManagementProductTable } from "@/components/tables/ProductManagementTable";

import { Create } from "./create";
import { config } from "@/config";
import VerifyProvider from "@/components/layouts/AuthProvider/VerifyProvider";

async function getData(): Promise<ManagementProduct[]> {
  const res = await fetch(`${config.baseUrl}/api/product`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  // Fetch data from your API here.
  let products: ManagementProduct[] = [];

  data.data.products.forEach((item: any, idx: number) => {
    products.push({
      no: idx + 1,
      id: String(item.id),
      name: item.name,
      price: String(item.price),
      status: item.status,
      image: item.image,
    });
  });

  return products;
}

//
export default async function ManagementUserPage() {
  const data = await getData();

  return (
    <VerifyProvider>
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
    </VerifyProvider>
  );
}
