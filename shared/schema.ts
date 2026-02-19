import { z } from "zod";

export const insertLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  company: z.string().min(1, "Company is required"),
  message: z.string().optional(),
});

export const leadSchema = insertLeadSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = z.infer<typeof leadSchema>;
