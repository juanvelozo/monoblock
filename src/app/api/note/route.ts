import { NextRequest, NextResponse } from "next/server";
import { prismaCli } from "@/libs/prisma";
import { INewNoteDTO } from "./types";

export async function GET() {
  const tasks = await prismaCli.note.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, privateNote=false, tags, updatedAt } =
      await request.json();

    const newTask: INewNoteDTO = await prismaCli.note.create({
      data: {
        title,
        description,
        privateNote,
        tags,
        updatedAt,
      },
    });
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}
