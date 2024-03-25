import { transport } from "@/lib/mail/nodemailer";
import { prisma } from "@/lib/prisma";
import { ResponseFormater } from "@/lib/ResponseFormat";
import { generateRandomPassword } from "@/lib/utils/generatePassword";

export async function GET() {}

export async function POST(req: Request) {
  const { name, email, telp } = await req.json();

  try {
    const randomPassword = generateRandomPassword(10);

    const user = await prisma.user.create({
      data: {
        name: name as string,
        password: randomPassword,
        email: email as string,
        telp: telp as string,
        roleId: 2, // 2 for user role
      },
      select: {
        name: true,
        email: true,
        telp: true,
        status: true,
      },
    });

    // send email to show  user password
    await transport.sendMail({
      from: "vascommtest@rizkyrezaserver123.my.id",
      to: user.email,
      subject: "Your Password from server",
      text: `This is a test email from Next.js with password: ${randomPassword}`,
      html: `<h1>ini adalah passwordnya: ${randomPassword}</h1>`,
    });

    const response: ResponseFormater = {
      code: 201,
      message: "User Created",
      data: { user },
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
