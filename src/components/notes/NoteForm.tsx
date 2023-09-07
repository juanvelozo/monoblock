"use client";

import { routes } from "@/constants/routes";
import { schemaCreateNote } from "@/schemas/notes/notes.schema";
import { CreateNoteInput } from "@/types/notes/note.controller";
import { useEffect, useState } from "react";
import { AnyObject, InferType, ObjectSchema } from "yup";
import { Input } from "../input/Input";
import { useParams, useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICreateNoteDTO } from "@/types/notes/note.dto";
import useModal, { Modal } from "../ui/Dialog";
import Button from "../button/Button";
import Container from "../common/container";
import TagInput from "../input/TagInput";
import { AnimatePresence, motion } from "framer-motion";

export default function NoteForm(): JSX.Element {
  // states
  const [Loading, setLoading] = useState<boolean>(false);
  const [categoryTagArray, setCategoryTagArray] = useState<string[]>([]);
  const [showTagInput, setShowTagInput] = useState<boolean>(false);
  // hooks
  const { push, refresh } = useRouter();
  const { closeModal, isOpen, openModal } = useModal();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isDirty, isSubmitting, isSubmitSuccessful },
    getValues,
  } = useForm<InferType<typeof schemaCreateNote>>({
    resolver: yupResolver(
      schemaCreateNote as ObjectSchema<ICreateNoteDTO, AnyObject, any, "">
    ),
  });

  const params = useParams();
  // functions
  function NavigateTo(id: string) {
    push(routes.noteDetail.replace(":id", id));
  }

  async function fetchData() {
    setLoading(true);
    const response = await fetch(`/api/note/${params.noteId}`);
    await response
      .json()
      .then((response) => {
        setValue(
          "title",
          response.title
            ? response.title
            : !response.title && !response.description
            ? "Nota vacía"
            : "Nota sin título"
        );
        setValue("description", response.description);
        setCategoryTagArray(response.tags);
      })
      .finally(() => setLoading(false));
  }

  async function deleteNote(id: string) {
    setLoading(true);
    return await fetch(`/api/note/${id}`, {
      method: "DELETE",
    }).then(() => {
      setLoading(false);
      push(routes.notes);
      refresh();
    });
  }

  async function onSubmit(
    event: InferType<typeof schemaCreateNote>
  ): Promise<void> {
    const TypedEvent: CreateNoteInput = {
      description: event.description,
      title: event.title,
      updatedAt: new Date(),
      private: false,
      tags: categoryTagArray.length ? categoryTagArray : [],
    };
    if (isSubmitSuccessful) {
      return;
    }
    if (params.noteId) {
      const response = await fetch(`/api/note/${params.noteId}`, {
        method: "PUT",
        body: JSON.stringify(TypedEvent),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
      NavigateTo(String(params.noteId));
    } else {
      const response = await fetch("/api/note", {
        method: "POST",
        body: JSON.stringify(TypedEvent),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      NavigateTo(data.id);
    }
    refresh();
  }

  //effects
  useEffect(() => {
    if (params.noteId) {
      fetchData();
    }
  }, [params.noteId]);

  // render
  return (
    <Container>
      <div className="w-full mx-auto">
        <Modal
          title="Eliminar nota"
          content={<p>¿Estás seguro de que querés borrar la nota?</p>}
          onClose={closeModal}
          onConfirm={() => deleteNote(String(params.noteId)).then(closeModal)}
          open={isOpen}
          disabled={Loading}
          loading={Loading}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 m-4"
        >
          <Input
            control={control}
            name="title"
            placeholder={Loading ? "Cargando..." : "Título"}
            disabled={Loading || isSubmitting}
            className="bg-transparent focus-visible:outline-none text-black placeholder:text-slate-400 rounded-lg py-4 w-full disabled:text-slate-100 text-3xl md:text-4xl lg:text-6xl"
            value=""
            props={{ autoFocus: true }}
          />
          <Input
            control={control}
            name="description"
            placeholder={Loading ? "Cargando..." : "Descripción"}
            disabled={Loading || isSubmitting}
            className="bg-transparent focus-visible:outline-none text-black placeholder:text-slate-400 rounded-lg py-4 w-full disabled:text-slate-100 text-md md:text-lg lg:text-xl"
            value=""
          />
          <Button
            type="button"
            onClick={() => setShowTagInput((prev) => !prev)}
            color="default"
            rounded="xl"
          >
            {showTagInput ? "Ocultar" : "Agregar categorías"}
          </Button>
          {showTagInput ? (
            <TagInput
              control={control}
              name="tags"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (event.currentTarget.value) {
                    setCategoryTagArray((prev) => {
                      const newArray = [...prev, event.currentTarget.value];
                      return newArray;
                    });
                    setValue("tags", [""]);
                  } else {
                    return;
                  }
                }
              }}
            />
          ) : null}
          {categoryTagArray.length ? (
            <AnimatePresence>
              <div className="p-4 space-y-2">
                <motion.div className="gap-2 flex w-full flex-wrap items-center overflow-hidden">
                  {categoryTagArray.map((el, index) => (
                    <motion.div
                      // transition={{ bounce: false }}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      key={index}
                      className="bg-red-600 text-white rounded-lg flex items-center justify-between"
                    >
                      <span className="font-semibold px-2 text-sm select-none">
                        {el}
                      </span>
                      <p
                        className="self-center mr-1 text-sm rounded-full w-4 h-4 bg-red-400 bg-opacity-70 cursor-pointer flex items-center justify-center"
                        onClick={() => {
                          // change this to the array index, not the value
                          setCategoryTagArray((prev) => {
                            const newAr = prev.filter((tag) => tag !== el);
                            return newAr;
                          });
                        }}
                      >
                        X
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatePresence>
          ) : null}

          <div
            className={`flex ${
              params.noteId ? "justify-between" : "justify-end"
            } gap-4`}
          >
            {params.noteId ? (
              <div className="flex items-center gap-4 w-1/2">
                <Button
                  type="button"
                  onClick={() => NavigateTo(String(params.noteId))}
                  rounded="xl"
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  onClick={openModal}
                  disabled={isSubmitting}
                  rounded="xl"
                  color="danger"
                >
                  Borrar
                </Button>
              </div>
            ) : null}
            <Button
              disabled={Boolean(!isDirty && params.noteId) || isSubmitting}
              color={isSubmitSuccessful ? "success" : "dark"}
              rounded="xl"
              loading={isSubmitting}
              className={
                isSubmitSuccessful ? "cursor-default pointer-events-none" : ""
              }
            >
              {isSubmitSuccessful
                ? params.noteId
                  ? "Cambios guardados correctamente"
                  : "Nota creada correctamente"
                : isSubmitting
                ? "Guardando..."
                : params.noteId
                ? "Guardar cambios"
                : "Crear nota"}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
