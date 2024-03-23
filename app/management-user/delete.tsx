"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { config } from "@/config";
import axios from "axios";

import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2Icon } from "lucide-react";

export function Delete({ id, name }: { id: string; name: string }) {
  const handleDelete = async () => {
    await axios.delete(`${config.baseUrl}/api/user`, {
      params: { id },
    });

    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-red-500 rounded-full p-2 inline-block cursor-pointer">
          <Trash2Icon className="text-white" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  overflow-hidden p-0">
        <div className="relative overflow-hidden h-[100px]">
          {/* icon */}
          <div className=" bg-primary rounded-br-[27px] rounded-bl-[27px] -translate-y-[50px] w-full h-[120px]"></div>
          <div className="bg-[#D83A56] -translate-y-24 mx-auto z-10 flex justify-center items-center rounded-full w-20 h-20">
            <div className="w-[40px] border-white h-8 border-4 rounded-2xl px-6 py-2 flex justify-end items-center overflow-hidden">
              <div className="w-[5px] p-1 rounded-full border-2 inline-block border-white translate-x-5"></div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="pb-10 pt-5 text-center">
          <h3 className="font-bold">Konfirmasi Hapus</h3>
          <p className="mt-3">Apakah kamu yakin menghapus “{name}” ?</p>
        </div>
        <DialogFooter className="w-full p-4 border-t border-gray-200">
          <DialogClose>
            <Button className="" variant={"outline"}>
              Batal
            </Button>
          </DialogClose>
          <DialogClose>
            <Button className="" variant={"destructive"} onClick={handleDelete}>
              Hapus
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
