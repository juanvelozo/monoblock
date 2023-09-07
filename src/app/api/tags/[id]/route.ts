import { prismaCli } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, {params}:{params:{name:string}}){
    try {
        
        const response = await prismaCli.tag.findUnique({
            where:{
                name: params.name
            }
        })
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(error)
        
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { name: string, color:string } }
  ) {
    try {
      const { name, color } = await request.json();    
      
      const response = await prismaCli.tag.update({
        where: {
          name: params.name
        },
        data: {
            name, color
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
      await prismaCli.tag.delete({
        where: {
          id:params.id,
        },
      });
  
      return NextResponse.json("Task id delete" + params.id);
    } catch (error) {
      return NextResponse.json(error);
    }
  }