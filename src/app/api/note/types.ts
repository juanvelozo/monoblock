import { NextApiRequest } from "next";

export interface CreateTasksApiRequest extends NextApiRequest {
  body: {
    title?: string | null
    description?: string | null
    tags?: String[]
    updatedAt: Date;
    readonly private?: boolean
  };
}

export interface INewNoteDTO {
  id: number;
  title?: string | null;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
  privateNote?: boolean
  tags?:String[]
}
