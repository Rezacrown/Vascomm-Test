import { prisma } from "@/lib/prisma";
import { ResponseFormater } from "@/lib/ResponseFormat";
import { Product } from "@prisma/client";

export type APiDashboardResponse = {
  userTotal: number;
  userActive: number;
  productActive: number;
  productTotal: number;
  newProducts: Product[];
};

export async function GET(req: Request) {
  try {
    const productActive = await prisma.product.count({
      where: {
        status: "aktif",
      },
    });

    const productTotal = await prisma.product.count();

    const userActive = await prisma.user.count({
      where: {
        status: "aktif",
      },
    });

    const userTotal = await prisma.user.count();

    const newProducts = await prisma.product.findMany({
      take: 10,
      orderBy: {
        createdAt: "asc",
      },
    });

    const response: ResponseFormater = {
      code: 200,
      message: "all data",
      data: { newProducts, userActive, userTotal, productActive, productTotal },
    };

    return Response.json(response);
  } catch (err: any) {
    console.log(err);

    const response: ResponseFormater = {
      code: err.code || 500,
      message: "Internal Server Error",
      data: {},
    };

    return Response.json(response);
  }
}
