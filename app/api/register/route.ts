// import { prisma } from "@/lib/prisma";
// import { ResponseFormater } from "@/lib/ResponseFormat";
// import { generateRandomPassword } from "@/lib/utils/generatePassword";

// export async function GET() {}

// export async function POST(req: Request) {
//   const formData = await req.formData();

//   console.log(formData);

//   const name = formData.get("name");
//   const email = formData.get("email");
//   const telp = formData.get("telp");

//   console.log(email, telp, name);

//   const randomPassword = generateRandomPassword(10);

//   console.log(randomPassword);

//   const user = await prisma.user.create({
//     data: {
//       name: name as string,
//       password: randomPassword,
//       email: email as string,
//       telp: telp as string,
//       roleId: 2, // 2 for user role
//     },
//     select: {
//       name: true,
//       email: true,
//       telp: true,
//       status: true,
//     },
//   });

//   console.log(user);

//   const response: ResponseFormater = {
//     code: 201,
//     message: "User Created",
//     data: { user },
//   };

//   //   return "success";
//   //   return Response.redirect("/login");
//   return Response.json(response);
// }
