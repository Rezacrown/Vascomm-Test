// "use client";
import React, { useEffect, useState } from "react";

import DashboardProvider from "@/components/layouts/DashboardProvider";

import { ManagementUserTable } from "@/components/tables/UserManagementTable";
import { columns, ManagementUser } from "./columns";
import { Button } from "@/components/ui/button";

import { Create } from "./create";

async function getData(): Promise<ManagementUser[]> {
  // Fetch data from your API here.
  let data: ManagementUser[] = [];

  Array.from({ length: 20 }, (_, i) => i + 1).forEach((i) => {
    data.push({
      id: String(i),
      name: "eza",
      telp: String(
        Math.floor(Math.random() * (1000000000 - 9999999999 + 1)) + 9999999999
      ),
      status: i % 2 == 0 ? "aktif" : "tidak aktif",
      email: "m@example.com",
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
          <h3 className="font-medium text-lg">Management user</h3>

          <Create />
        </div>
        <div className="card">
          <ManagementUserTable columns={columns} data={data} />
        </div>
      </div>
    </DashboardProvider>
  );
}
