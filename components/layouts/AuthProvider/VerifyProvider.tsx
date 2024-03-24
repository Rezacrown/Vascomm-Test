"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// belum login
export default function VerifyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useSession();

  if (!session || !session.data?.user) {
    return router.push("/login");
  }

  return <div>{children}</div>;
}
