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
import { NotebookPenIcon } from "lucide-react";
import Image from "next/image";

import axios from "axios";

import { config } from "@/config";
import { useState } from "react";

type PropsEditData = {
  id: string;
  data: any;

  props: {
    section: string;
    data: string | number;
  }[];
};

export function Edit({ data, id, props }: PropsEditData) {
  const inputData = props;

  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const handleUpdate = async (form: FormData) => {
    await axios
      .put(`${config.baseUrl}/api/product`, form, {
        params: { id: id },
      })
      .catch((error) => console.log(error));

    window.location.reload();
  };

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
          <DialogTitle>Edit Produk</DialogTitle>
        </DialogHeader>
        {/*  */}
        <form action={handleUpdate}>
          <div className="flex flex-col gap-5 my-5">
            {InputSection.map((item, idx) => {
              let valueInput;

              inputData.forEach((data, i) => {
                if (item.name === data.section) {
                  valueInput = data.data;
                }
              });

              return (
                <div key={idx} className="">
                  <Label
                    htmlFor={item.id}
                    className="text-[#757575] text-[12px]"
                  >
                    {item.type == "file" ? (
                      <Image
                        src={currentImg || `${config.baseUrl}/${data.image}`}
                        alt=""
                        width={500}
                        height={500}
                        className="aspect-video border-[0.3px] border-black"
                      />
                    ) : (
                      item.label
                    )}
                  </Label>
                  <Input
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    onChange={(e) => {
                      if (e.target.type == "file") {
                        const currentImg = e.currentTarget.files![0];

                        const url = URL.createObjectURL(currentImg);

                        setCurrentImg(url);
                      }
                    }}
                    placeholder={item.placeholder}
                    style={item.type == "file" ? { display: "none" } : {}}
                    defaultValue={item.type == "file" ? "" : valueInput}
                    className="mt-2 placeholder:text-[#757575]"
                  />
                </div>
              );
            })}
          </div>
          <DialogFooter className="w-full">
            <Button className="w-full" type="submit">
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const InputSection = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Masukkan Nama Produk",
    label: "Nama Produk",
  },
  {
    id: "price",
    name: "price",
    type: "number",
    placeholder: "Masukkan Harga Produk",
    label: "Harga",
  },
  {
    id: "image",
    name: "image",
    type: "file",
    placeholder: "Masukkan Gambar Produk",
    label: "Gambar",
  },
];
