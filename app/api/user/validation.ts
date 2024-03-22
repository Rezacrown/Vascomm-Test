import { z } from "zod";

export const createUserValidation = z.object({
  name: z.string(),
  telp: z.string(),
  email: z.string(),
});
