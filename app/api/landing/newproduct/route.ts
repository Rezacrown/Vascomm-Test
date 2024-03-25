import { prisma } from "@/lib/prisma";
import { ResponseFormater } from "@/lib/ResponseFormat";

export async function GET(req: Request) {
  try {
    // for new products section
    const newProducts = await prisma.product.findMany({
      where: {
        status: "aktif",
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
      },
    });

    const response: ResponseFormater = {
      code: 200,
      message: "scuccess get new products",
      data: { newProducts },
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
