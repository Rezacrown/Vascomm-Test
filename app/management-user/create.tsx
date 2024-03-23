"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { useState } from "react";

type StatePayload = {
  name: string;
  email: string;
  telp: string;
};

export function Create() {
  const [payload, setPayload] = useState<StatePayload>({
    name: "",
    email: "",
    telp: "",
  });

  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = JSON.stringify(payload);

    await fetch(`${config.baseUrl}/api/user`, {
      method: "POST",
      body: data,
    });
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Tambah User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/*  */}
        <DialogHeader className="text-center mx-auto">
          <DialogTitle>Tambah User</DialogTitle>
        </DialogHeader>
        {/*  */}
        <div className="flex flex-col gap-5 my-5">
          {InputSection.map((item, idx) => {
            return (
              <div key={idx} className="">
                <Label htmlFor={item.id} className="text-[#757575] text-[12px]">
                  {item.label}
                </Label>
                <Input
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                  className="mt-2 placeholder:text-[#757575]"
                />
              </div>
            );
          })}
        </div>
        <DialogFooter className="w-full">
          <DialogClose onClick={handleSubmit} asChild>
            <Button className="w-full" type="button">
              Simpan
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const InputSection = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Masukkan Nama Lengkap",
    label: "Nama Lengkap",
  },
  {
    id: "telp",
    name: "telp",
    type: "text",
    placeholder: "Masukkan Nomor Telepon",
    label: "No Telp",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Masukkan Email",
    label: "Email",
  },
];
