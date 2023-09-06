import { NextRequest, NextResponse } from "next/server";
import { prismaCli } from "@/libs/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const response = await prismaCli.note.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(response);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description, privateNote=false, tags, updatedAt } = await request.json();    
    
    const response = await prismaCli.note.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,description, privateNote, tags, updatedAt
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prismaCli.note.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json("Task id delete" + params.id);
  } catch (error) {
    return NextResponse.json(error);
  }
}
