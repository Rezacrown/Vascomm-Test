"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { config } from "@/config";
import axios from "axios";

import { NotebookPenIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ManagementUser } from "./columns";

type PropsEditData = {
  id: string;

  data: ManagementUser;

  props: {
    section: string;
    data: string;
  }[];
};

type StatePayload = {
  name: string;
  email: string;
  telp: string;
};

export function Edit(data: PropsEditData) {
  const [inputData] = useState<(typeof data)["props"]>(data.props);

  const [payload, setPayload] = useState<StatePayload>({
    name: "",
    email: "",
    telp: "",
  });

  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async () => {
    await axios.put(`${config.baseUrl}/api/user`, payload, {
      params: {
        id: data.id,
      },
    });

    window.location.reload();
  };

  useEffect(() => {
    setPayload({
      email: data.data.email,
      name: data.data.name,
      telp: data.data.telp,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-yellow-500 rounded-full p-2 inline-block cursor-pointer">
          <NotebookPenIcon className="text-white" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/*  */}
        <DialogHeader className="text-center mx-auto">
          <DialogTitle>Ubah Data User</DialogTitle>
        </DialogHeader>
        {/*  */}
        <div className="flex flex-col gap-5 my-5">
          {InputSection.map((item, idx) => {
            let valueInput: any;

            inputData.forEach((data, i) => {
              if (item.name == data.section) {
                valueInput = data.data;
              }
            });

            return (
              <div key={`input-edit-${idx}`} className="">
                <Label htmlFor={item.id} className="text-[#757575] text-[12px]">
                  {item.type == "file" ? (
                    <Image
                      src={valueInput as string}
                      alt={item.label}
                      width={500}
                      height={500}
                      className="aspect-video w-60"
                    />
                  ) : (
                    item.label
                  )}
                </Label>
                <Input
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  defaultValue={valueInput}
                  onChange={handleChange}
                  className="mt-2 placeholder:text-[#757575]"
                />
              </div>
            );
          })}
        </div>
        <DialogFooter className="w-full">
          <Button className="w-full" type="button" onClick={handleSubmit}>
            Simpan
          </Button>
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
