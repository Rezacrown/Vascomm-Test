"use client";
import React from "react";

import BackgroundAuth from "@/public/assets/images/side-backgorund-authpage.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { config } from "@/config";
import AuthenticatedProvider from "@/components/layouts/AuthProvider/AuthenticatedProvider";
import { useRouter } from "next/navigation";
// import Authenticated from "@/components/layouts/AuthProvider/AuthenticatedProvider";

export default function RegisterPage() {
  const router = useRouter();
  //
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const telp = formData.get("telp");

    const payload = { name, email, telp };

    const res = await axios
      .post(`${config.baseUrl}/api/register`, JSON.stringify(payload), {})
      .catch((error) => {
        console.log(error.response.statusText);
        alert(error.response.statusText);
      });

    if (res) {
      router.push("/login");
    }
  };

  return (
    // @ts-ignore
    <AuthenticatedProvider>
      <div className="">
        <div className="grid grid-cols-2">
          {/* grid 1 */}
          <div className="h-screen flex justify-center items-center relative">
            <Image
              src={BackgroundAuth}
              alt=""
              width={200}
              height={200}
              className="h-screen w-full -z-10 absolute bg-cover object-cover"
            />
            <div className="max-w-[430px] text-center">
              <h1 className="font-semibold text-5xl">NAMA APLIKASI</h1>
              <p className="font-normal text-center text-wrap mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          {/* grid 2 */}
          <div className="h-screen flex justify-center items-center">
            <div className="">
              <div className="">
                <h3 className="text-2xl">Mendaftar</h3>
                <p className="text-[12px] max-w-[360px] mt-4 text-gray-400">
                  Silahkan masukkan data diri anda untuk mendaftar
                </p>
              </div>
              <div className="mt-8">
                <form action={handleSubmit}>
                  {InputSection.map((item, idx) => {
                    return (
                      <div key={idx} className="mb-6">
                        <label
                          htmlFor={item.id}
                          className="text-[12px] text-[#757575] mb-2 inline-block"
                        >
                          {item.label}
                        </label>
                        <Input
                          id={item.id}
                          name={item.name}
                          type={item.type}
                          placeholder={item.placeholder}
                          className="rounded-[1px] border-[#676C73] px-6 py-3 placeholder:text-gray-400 focus:border-none transition-all"
                          autoComplete="off"
                        />
                      </div>
                    );
                  })}
                  <Button
                    type="submit"
                    className="text-white font-semibold w-full rounded-[1px] my-6"
                  >
                    Daftar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedProvider>
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
    placeholder: "Masukkan Email Anda",
    label: "Email",
  },
];
