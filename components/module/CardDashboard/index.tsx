import { Card } from "@/components/ui/card";
import React from "react";

export default function CardDashboard() {
  return (
    <Card className="rounded-2xl px-5 py-2 w-[260px] h-[117px] bg-gradient-to-r from-[#C2D6FF] to-[#ADC9FF] flex flex-col justify-start items-start relative overflow-hidden">
      <div className="p-5">
        <h3 className="text-[#597393]">jumlah user</h3>
        <h5 className="text-2xl text-[#002060] mt-2">150 user</h5>
      </div>

      <div className="overflow-hidden">
        <div className="rounded-full bg-white/20 p-8 absolute bottom-2 -right-4"></div>
        <div className="rounded-full bg-white/20 p-8 absolute -bottom-7 right-0"></div>
      </div>
    </Card>
  );
}
