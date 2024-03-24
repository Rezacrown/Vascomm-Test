import queryparse from "query-string";
import { prisma } from "@/lib/prisma";
import { ResponseFormater } from "@/lib/ResponseFormat";

export async function GET(req: Request) {
  const { search, searchParams } = new URL(req.url);
  const { take } = queryparse.parse(search);

  const searching = searchParams.get("searching");

  try {
    const products = await prisma.product.findMany({
      where: {
        status: "aktif",
      },
      take: Number(take) || 10,

      select: {
        id: true,
        name: true,
        price: true,
        image: true,
      },
    });

    // search math products
    const matchProducts = products.filter((prod) => {
      return prod.name.match(searching as string);
    });

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
      message: "scuccess get all products",
      data: { products: matchProducts, newProducts },
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
