"use client";
import React from "react";

import BackgroundAuth from "@/public/assets/images/side-backgorund-authpage.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import AuthenticatedProvider from "@/components/layouts/AuthProvider/AuthenticatedProvider";

export default function LoginPage() {
  const session = useSession();

  console.log(session.data);

  const handleSumit = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", { email, password });
  };

  return (
    <div className="">
      <div className="grid grid-cols-2">
        {/* grid 1 */}
        <div
          // style={{
          //   background: "url('/assets/images/side-backgorund-authpage.png')",
          // }}
          className="h-screen flex justify-center items-center relative"
        >
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
              <h3 className="text-2xl">Selamat Datang Admin</h3>
              <p className="text-[12px] max-w-[360px] mt-4 text-gray-400">
                Silahkan masukkan email atau nomor telepon dan password Anda
                untuk mulai menggunakan aplikasi
              </p>
            </div>
            <div className="mt-8">
              <form action={handleSumit}>
                {InputSection.map((item, idx) => {
                  return (
                    <div key={idx} className="mb-6">
                      <label
                        htmlFor="email"
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
                <Button className="text-white font-semibold w-full rounded-[1px] my-6">
                  Masuk
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputSection = [
  // noted this
  {
    id: "email",
    name: "email",
    type: "text",
    placeholder: "Contoh: admin@gmail.com",
    label: "Email / Nomor Telpon",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Masukkan passward",
    label: "Password",
  },
];
