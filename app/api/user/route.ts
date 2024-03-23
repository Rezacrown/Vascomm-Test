import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

import { ResponseFormater } from "@/lib/ResponseFormat";
import queryparse from "query-string";

import { createUserValidation, deleteUserValidation } from "./validation";
import { generateRandomPassword } from "@/lib/utils/generatePassword";

// users get for admin crud
export async function GET(req: Request) {
  // console.log(">>>>>>", { req: req.url });

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
    const validate = createUserValidation.parseAsync(body);

    // create user data by admin crud
    const user = await prisma.user.create({
      data: {
        name: (await validate).name,
        email: (await validate).email,
        telp: (await validate).telp,
        status: "aktif",
        roleId: 2, // 2 for role user
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

// delete user for admin crud
export async function DELETE(req: Request) {
  const { search } = new URL(req.url);
  const { id } = queryparse.parse(search);

  try {
    const validate = Number(id);

    const user = await prisma.user.delete({
      where: {
        id: validate,
      },
    });

    const response: ResponseFormater = {
      code: 201,
      message: "success delete data user",
      // data: { ...user, password: false },
      data: { ...user, password: false },
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

export async function PUT(req: Request) {
  const { search } = new URL(req.url);
  const { id } = queryparse.parse(search);

  const body = await req.json();

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: body.name,
        email: body.email,
        telp: body.telp,
      },
    });

    const response: ResponseFormater = {
      code: 200,
      message: "success update data user",
      data: { ...user, password: false },
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
