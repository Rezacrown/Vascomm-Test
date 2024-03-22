"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

import { Edit } from "./edit";
import { Delete } from "./delete";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ManagementProduct = {
  // no?: number;
  id: string;
  name: string;
  price: string;
  image: string;
  status: "aktif" | "tidak aktif";
  action?: any;
};

export const columns: ColumnDef<ManagementProduct>[] = [
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
          Nama Produk
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Harga
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const ProductData = row.original;
      return <div className="font-bold">Rp{ProductData.price}</div>;
    },
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gambar <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (props) => {
      const ProductData = props.row.original;

      return (
        <div className="bg-transparent">
          <Image
            src={ProductData.image}
            alt=""
            width={100}
            height={100}
            className="bg-cover object-fill object-center"
          />
        </div>
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
    cell: ({ row }) => {
      const ProductData = row.original;
      return (
        <div className="flex text-center mx-auto">
          <Badge
            className={`font-bold text-white w-28 text-center ${
              ProductData.status === "aktif" ? "bg-green-500" : "bg-red-500"
            } `}
            // variant={ProductData.status == "aktif" ? "outline" : "destructive"}
          >
            <span className="inline-block mx-auto">{ProductData.status}</span>
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row, column }) => {
      const ProductData = row.original;

      const PropPassData = [
        {
          section: "name",
          data: ProductData.name,
        },
        {
          section: "price",
          data: ProductData.price,
        },
        {
          section: "image",
          data: ProductData.image,
        },
      ];

      return (
        <div className="flex justify-center gap-6 items-center relative mx-auto overflow-hidden">
          <div className="bg-green-500 rounded-full p-2 inline-block cursor-pointer">
            <Eye className="text-white" />
          </div>
          <Edit props={PropPassData} />
          <Delete />
        </div>
      );
    },
  },
];
