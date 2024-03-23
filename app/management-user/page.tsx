// "use client";
import React, { useEffect, useState } from "react";

import DashboardProvider from "@/components/layouts/DashboardProvider";

import { ManagementUserTable } from "@/components/tables/UserManagementTable";
import { columns, ManagementUser } from "./columns";

import { config } from "@/config";

import { Create } from "./create";
import { User } from "@prisma/client";

async function getData(): Promise<ManagementUser[]> {
  // Fetch data from your API here.

  const fetching = await fetch(`${config.baseUrl}/api/user`, {
    method: "GET",
    cache: "no-store",
    next: {
      // revalidate: false,
    },
  });

  const user = (await fetching.json()) as any; // ResponseFormater<User[]>;

  console.log(user);

  let data: ManagementUser[] = [];

  user.data.users.forEach((user: User, idx: number) => {
    data.push({
      id: String(user.id),
      no: idx + 1,
      email: user.email,
      name: user.name,
      status: user.status,
      telp: user.telp,
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
