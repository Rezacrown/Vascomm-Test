import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

import { ResponseFormater } from "@/lib/ResponseFormat";

import { createUserValidation } from "./validation";
import { generateRandomPassword } from "@/lib/utils/generatePassword";

// users get for admin crud
export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({});

    const response: ResponseFormater = {
      code: 200,
      message: "success get data users",
      data: { users },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err,
      message: "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

// create user for admin crud
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const validate = createUserValidation.parse(body);

    // create user data by admin crud
    const user = await prisma.user.create({
      data: {
        name: validate.name,
        email: validate.email,
        telp: validate.telp,
        status: "aktif",
        password: generateRandomPassword(),
      },
    });

    const response: ResponseFormater = {
      code: 201,
      message: "success create user",
      data: { user: { ...user, password: false } },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err,
      message: err.message || "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

// edit user for admin crud
export async function PUT(req: Request) {
  const id = req; // GET Qyert params
  const body = await req.json();
  try {
    const validate = createUserValidation.parse(body);

    // create user data by admin crud
    // const user = await prisma.user.update({});

    const response: ResponseFormater = {
      code: 201,
      message: "success update data user",
      data: {},
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err,
      message: err.message || "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}
