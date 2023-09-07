import { prismaCli } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const tags = await prismaCli.tag.findMany()
    return NextResponse.json(tags)
}

export async function POST(request: NextRequest) {
    try {
        const { color, name } = await request.json()

        const newTag = await prismaCli.tag.create({
            data: {
                color, name
            }
        })
        return NextResponse.json(newTag)
    } catch (error) {
        return NextResponse.json(error)
    }
}