"use server";
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
import { uploadFile } from "@/lib/utils/uploadImage";
import axios from "axios";
import Image from "next/image";

export async function Create() {
  const handleSubmit = async (form: FormData) => {
    "use server";

    const image = form.get("image") as File;

    const name = form.get("name") as string;
    const price = form.get("price") as string;

    const url = await uploadFile(image);

    // console.log(url);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", url);

    await axios
      .post(`${config.baseUrl}/api/product`, formData, {})
      .catch((error) => console.log(error));

    // window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Tambah Produk</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/*  */}
        <DialogHeader className="text-center mx-auto">
          <DialogTitle>Tambah Produk</DialogTitle>
        </DialogHeader>
        {/*  */}
        <form action={handleSubmit}>
          <div className="flex flex-col gap-5 my-5">
            {InputSection.map((item, idx) => {
              return (
                <div key={idx} className="">
                  <Label
                    htmlFor={item.id}
                    className="text-[#757575] text-[12px]"
                  >
                    {item.type == "file" ? (
                      <Image
                        src={"/assets/icons/input-file-icon.png"}
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
                    placeholder={item.placeholder}
                    style={item.type == "file" ? { display: "none" } : {}}
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
