import { prisma } from "@/lib/prisma";

import fs from "fs";

import { ResponseFormater } from "@/lib/ResponseFormat";
import queryparse from "query-string";

import { createProductValidation, UpdateProductValidation } from "./validation";

import { uploadFile } from "@/lib/utils/uploadImage";
import { join } from "path";

// product get for admin crud
export async function GET(req: Request) {
  try {
    const products = await prisma.product.findMany({});

    const response: ResponseFormater = {
      code: 200,
      message: "success get data products",
      data: { products },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err || 500,
      message: "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

// create product for admin crud
export async function POST(req: Request) {
  const formData = await req.formData();

  console.log(formData);

  const name = formData.get("name");
  const price = formData.get("price");

  const image = formData.get("image") as File;

  console.log({ price, name, image });

  try {
    //   validate body
    const validate = createProductValidation.parseAsync({ price, name, image });

    const imageUrl = await uploadFile(image);

    // create product data by admin crud
    const product = await prisma.product.create({
      data: {
        name: (await validate).name,
        price: (await validate).price,
        image: imageUrl,
        status: "aktif",
      },
    });

    const response: ResponseFormater = {
      code: 201,
      message: "success create product",
      data: { product },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err.code || 500,
      message: err.message || "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

// delete product for admin crud
export async function DELETE(req: Request) {
  const { search } = new URL(req.url);
  const { id } = queryparse.parse(search);

  try {
    // soft delete
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "nonaktif",
      },
    });

    // for hard delete
    // const product = await prisma.product.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // });

    // if (fs.existsSync(join("public/", product.image))) {
    //   fs.unlinkSync("public/" + product.image);
    // }

    const response: ResponseFormater = {
      code: 200,
      message: "success delete data product",
      data: { ...product },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err || 500,
      message: err.message || "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

// update product for admin crud
export async function PUT(req: Request) {
  const { search } = new URL(req.url);
  const { id } = queryparse.parse(search);

  const formData = await req.formData();
  const name = formData.get("name");
  const price = formData.get("price");
  const image = formData.get("image") as File;

  try {
    // validate
    const validated = UpdateProductValidation.parseAsync({ price, name, id });

    // find product
    const oldProduct = await prisma.product.findFirst({
      where: { id: Number((await validated).id) },
    });

    let newImageUrl = "";

    // delete old image in storage
    if (image && fs.existsSync(join("public/", oldProduct!.image))) {
      console.log("public/" + oldProduct?.image);
      fs.unlinkSync("public/" + oldProduct?.image);
    }

    // create url & store new image
    if (image.size) {
      newImageUrl = await uploadFile(image);
    } else {
      newImageUrl = oldProduct?.image as string;
    }

    const product = await prisma.product.update({
      where: { id: Number((await validated).id) },
      data: {
        name: (await validated).name,
        price: (await validated).price,
        image: newImageUrl || oldProduct?.image,
      },
    });

    const response: ResponseFormater = {
      code: 200,
      message: "success update data product",
      data: { product },
    };

    return Response.json(response);
    //
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err || 500,
      message: "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}

//
