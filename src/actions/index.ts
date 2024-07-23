import { defineAction, z } from "astro:actions";

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (email) => {
      return { success: true };
    },
  }),
};
