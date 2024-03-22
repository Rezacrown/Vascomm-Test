"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, Eye, NotebookPenIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Edit } from "./edit";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ManagementUser = {
  // no?: number;
  id: string;
  name: string;
  email: string;
  telp: string;
  status: "aktif" | "tidak aktif";
  action?: any;
};

export const columns: ColumnDef<ManagementUser>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Lengkap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "telp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No. Telepon
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const userData = row.original;

      const PropPassData = [
        {
          section: "name",
          data: userData.name,
        },
        {
          section: "telp",
          data: userData.telp,
        },
        {
          section: "email",
          data: userData.email,
        },
      ];

      return (
        <div className="flex justify-around items-center">
          <div className="bg-green-500 rounded-full p-2 inline-block cursor-pointer">
            <Eye className="text-white" />
          </div>
          <Edit props={PropPassData} />
        </div>
      );
    },
  },
];