import { config } from "@/config";
import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: config.emailHost, // Ganti dengan host SMTP hosting Anda
  port: 465, // Ganti dengan port SMTP hosting Anda
  secure: true, // Ganti dengan true jika hosting Anda menggunakan SSL/TLS
  auth: {
    user: config.emailAddress, // Ganti dengan username email hosting Anda
    pass: config.emailPassword, // Ganti dengan password email hosting Anda
  },
});
