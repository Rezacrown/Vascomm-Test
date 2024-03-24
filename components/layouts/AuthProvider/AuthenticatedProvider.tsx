"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// sudah login
export default function AuthenticatedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useSession();

  if (session && session.data?.user) {
    return router.push("/");
  }

  return <div>{children}</div>;
}
