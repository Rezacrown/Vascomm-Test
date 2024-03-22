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
import Image from "next/image";

export function Create() {
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
        <div className="flex flex-col gap-5 my-5">
          {InputSection.map((item, idx) => {
            return (
              <div key={idx} className="">
                <Label htmlFor={item.id} className="text-[#757575] text-[12px]">
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
