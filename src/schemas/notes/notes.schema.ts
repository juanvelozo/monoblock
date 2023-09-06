import { CreateNoteInput } from "@/types/notes/note.controller";
import * as yup from "yup";

export const schemaCreateNote: yup.Schema<CreateNoteInput> = yup.object({
  title: yup.string().nullable().optional(),
  description: yup.string().nullable().optional(),
  privateNote: yup.boolean().optional(),
  tags: yup.array().optional(),
  updatedAt: yup.date().optional()
});
