"use client";
import Button from "@/components/button/Button";
import useModal, { Modal } from "@/components/ui/Dialog";
import { routes } from "@/constants/routes";
import { ILayoutDefaultProps } from "@/types/ui/layout/Layout.types";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

async function deleteNote(id: string) {
  return await fetch(`/api/note/${id}`, {
    method: "DELETE",
  });
}

export default function Layout({ children }: ILayoutDefaultProps) {
  // states
  const [loading, setLoading] = useState<boolean>(false);
  // hook
  const params = useParams();
  const { push, refresh } = useRouter();
  const { closeModal, isOpen, openModal } = useModal();

  // render
  return (
    <>
      <div className="flex justify-between my-4 space-x-3">
        <Button onClick={() => push(routes.notes)} color="default" fullWidth rounded="lg"  >
          Volver
        </Button>
        <Button
          onClick={() =>
            push(routes.editNote.replace(":id", String(params.noteId)))
          }
          color="info" fullWidth rounded="lg"  
        >
          Editar
        </Button>
        <Button color="danger" onClick={openModal}fullWidth rounded="lg" >
          Borrar
        </Button >
      </div>
      <Modal
        title="Eliminar nota" 
        content={<p>¿Estás seguro de que querés borrar la nota?</p>}
        onClose={closeModal}
        onConfirm={() => {
          setLoading(true);
          deleteNote(String(params.noteId)).then(() => {
            closeModal();
            setLoading(false);
            push(routes.notes);
            refresh();
          });
        }}
        open={isOpen}
        disabled={loading}
        loading={loading}
      />
      {children}
    </>
  );
}
