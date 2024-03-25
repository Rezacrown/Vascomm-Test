export const config = {
  databaseUrl: process.env.DATABASE_URL as string,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  emailHost: process.env.NODEMAILER_HOST as string,
  emailAddress: process.env.NODEMAILER_MAIL as string,
  emailPassword: process.env.NODEMAILER_PASSWORD as string,
};
