import { config } from "@/config";
import fs from "fs";
import { join } from "path";

export async function uploadFile(image: File): Promise<string> {
  // Set the target directory path
  const targetDir = join(process.cwd(), "public", "uploads");

  // Create the target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  // convert file
  const byte = await image.arrayBuffer();
  const buffer = Buffer.from(byte);

  const uniqFileName = String(Date.now()) + "-" + image.name;

  const publicPath = join(process.cwd(), "public", "uploads", uniqFileName);

  // store in local machine
  await fs.promises.writeFile(publicPath, buffer);

  // create url image
  const urlImage = "uploads/" + uniqFileName;
  console.log(urlImage);

  return urlImage;
}
