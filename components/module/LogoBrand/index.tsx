import Image from "next/image";
import React from "react";

import LogoImage from "@/public/assets/images/logo-vascomm.png";
import VectorNameLogo from "@/public/assets/images/vacomm-vector.svg";

export default function LogoBrand() {
  return (
    <div className="">
      <div className="flex gap-x-2">
        <Image src={LogoImage} alt="" width={35.43} height={27.09} />
        <Image src={VectorNameLogo} alt="" width={100} height={100} />
      </div>
    </div>
  );
}
