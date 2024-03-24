import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  // Gunakan Prisma sebagai adapter
  //   adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Masukan Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Masukan Password",
        },
      },
      authorize: async (credential, req) => {
        const user = await prisma.user.findFirst({
          where: {
            email: credential?.email,
            password: credential?.password,
          },
          select: {
            id: true,
            name: true,
            email: true,
            Role: true,
          },
        });

        if (!user?.id) {
          console.log("user tidak ada: ", user);
          return null;
        }

        return {
          id: user?.id,
          name: user?.name || "rexa",
          email: user?.email,
        } as any;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  debug: true,
};
