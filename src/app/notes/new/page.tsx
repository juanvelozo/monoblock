import NoteForm from "@/components/notes/NoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nueva nota",
  icons: {
    icon: "/favicon.png",
  },
};

export default function NewNote(): JSX.Element {

  // render
  return (
    <NoteForm/>
  );
}
