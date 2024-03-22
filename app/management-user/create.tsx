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

export function Create() {
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