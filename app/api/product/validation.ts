import { z } from "zod";

export const createProductValidation = z.object({
  name: z.string(),
  price: z.string(),
  //   image: z.string(),
});

export const UpdateProductValidation = z.object({
  id: z.string(),

  name: z.string(),
  price: z.string(),
});

export const deleteProductValidation = z.object({
  id: z.string(),
});
