import { Metadata } from "next";
import { prismaCli } from "@/libs/prisma";
import { Suspense } from "react";
import { PublicNote } from "@/types/notes/note.type";
import { NoteCard } from "@/components/notes/NoteCard";
import Container from "@/components/common/container";
import Link from "next/link";
import { routes } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Notes",
  icons: {
    icon: "/favicon.png",
  },
};

export const dynamic = "force-dynamic" 

async function FetchNotes() {
  return await prismaCli.note.findMany();
}

export default async function NotesPage(): Promise<JSX.Element> {
  //constants
  const data: PublicNote[] = await FetchNotes();
  
  //states

  //hooks

  //functions

  //effects

  FetchNotes();

  //render

  return (
    <Container>
      {data.length ? (
        <Suspense fallback={<span>Loading notes...</span>}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-3">
            {data.map((el) => (
              <NoteCard data={el} key={el.id}/>
            ))}
          </div>
        </Suspense>
      ) : (
        <>
        <hr/>
        <h2 className="my-3 text-6xl font-light text-slate-400">Aún no hay notas</h2>
        <span>¿Querés crear tu primer nota?</span>
        <Link className="mx-2 font-bold text-slate-400" href={routes.createNote}>Click aquí</Link>
        </>
      )}
    </Container>
  );
}
