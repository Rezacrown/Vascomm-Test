export async function GET(req: Request) {
  const data = [
    {
      name: "reza",
      email: "reza@gmail.com",
    },
  ];

  return Response.json({ data });
}
