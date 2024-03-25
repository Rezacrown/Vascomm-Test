import { prisma } from "@/lib/prisma";
import { ResponseFormater } from "@/lib/ResponseFormat";
import queryString from "query-string";

export async function GET(req: Request) {}

export async function POST(req: Request) {}

export async function PUT(req: Request) {
  const { search } = new URL(req.url);
  const { id } = queryString.parse(search);

  const { status } = await req.json();

  console.log(id, status);
  try {
    if (status != "nonaktif") {
      throw new Error("status incorrect");
    }

    await prisma.user.update({
      where: { id: Number(id) },
      data: {
        status: "aktif",
      },
    });

    const response: ResponseFormater = {
      code: 200,
      message: "success update status user",
      data: {},
    };

    return Response.json(response);
  } catch (err: any) {
    const response: ResponseFormater = {
      code: err.code || 500,
      message: err.message || "Internal Server Error",
      data: {},
    };

    return response;
  }
}
