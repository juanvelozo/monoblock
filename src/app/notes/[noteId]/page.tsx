import Container from "@/components/common/container";
import NoteDetail from "@/components/notes/NoteDetail";
import { prismaCli } from "@/libs/prisma";
import { PublicNote } from "@/types/notes/note.type";
import { Metadata } from "next";
import { Suspense } from "react";

async function FetchNoteDetail(id: string) {
  return await prismaCli.note.findUnique({
    where: {
      id: Number(id),
    },
  });
}

export const metadata: Metadata = {
  title: "Nota",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function NoteDetailPage({
  params,
}: any): Promise<JSX.Element> {
  //constants
  const data:PublicNote|null = await FetchNoteDetail(params.noteId as string);

  // if (!data || !params.noteId) {
  //   return (
  //     <>
  //       <hr />
  //       <h2 className="my-3 text-6xl font-light text-slate-400">
  //         Error al consultar la data
  //       </h2>
  //       <span>Parece que la nota ya no existe.</span><br/>
  //       <span>¿Querés crear tu primer nota?</span>
  //       <Link
  //         className="mx-2 font-bold text-slate-400"
  //         href={routes.createNote}
  //       >
  //         Click aquí
  //       </Link>
  //     </>
  //   );
  // }
  //render

  return (
    <Container>
      <Suspense fallback={<p>LOADING...</p>}>
        <NoteDetail data={data!} />
      </Suspense>
    </Container>
  );
}
