"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// sudah login
export function AuthenticatedProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const session = useSession();

  if (session && session.data?.user) {
    return router.push("/");
  }

  return <div>{props.children}</div>;
}

// belum login
export function VerifyProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const session = useSession();

  if (!session || !session.data?.user) {
    return router.push("/login");
  }

  return <div>{children}</div>;
}
