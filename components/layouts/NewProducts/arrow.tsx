import Image from "next/image";

import NextIconSLider from "@/public/assets/images/next-slider-icon.svg";
import PrevIconSLider from "@/public/assets/images/prev-slider-icon.svg";

//
type ArrowProps = {
  className?: string;
  style?: object;
  onClick?: (e?: any) => any;
};

export function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={NextIconSLider}
      alt=""
      width={100}
      height={100}
      className={className}
      style={{ ...style, display: "block", scale: 1.7, marginLeft: "30px" }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={PrevIconSLider}
      alt=""
      width={100}
      height={100}
      className={className}
      style={{ ...style, display: "block", scale: 1.7, marginRight: "30px" }}
      onClick={onClick}
    />
  );
}
