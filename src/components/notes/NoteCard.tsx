"use client";
import { routes } from "@/constants/routes";
import { PublicNote } from "@/types/notes/note.type";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/relativeTime"; // import plugin
import es from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

dayjs.locale(es);
dayjs.extend(localeData);
dayjs.extend(isLeapYear);

export function NoteCard({ data }: INoteCardProps): JSX.Element {
  // hooks
  const { push } = useRouter();
  // functions
  function NavigateTo() {
    push(routes.noteDetail.replace(":id", String(data.id)));
  }

  // render
  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.03 * data.id, duration: data.id * 0.002 }}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="flex h-40 justify-between items-center flex-col rounded-lg bg-gray-100 sdataf-center p-2 cursor-pointer hover:shadow hover:bg-opacity-30 transition-all duration-300 ease-in-out group"
        onClick={NavigateTo}
      >
        <div className="w-full overflow-clip">
          <div className="border-b-2">
            <p
              className={` group-hover:font-extrabold transition-all duration-300 ease-in-out ${
                !data.title
                  ? "text-gray-500 font-normal"
                  : "text-black font-semibold truncate w-4/5"
              }`}
            >
              {!data.title && !data.description
                ? "Nota vacía..."
                : !data.title
                ? "Nota sin título"
                : data.title}
            </p>
            {data.tags?.length ? (
            <div className="flex items-center gap-1 bg-orange-500 text-white p-1">
              <span className="text-xs font-light self-start">Tags:</span>
              <p className="text-xs">{data.tags?.length}</p>
           
            </div>
          ) : null}
          </div>
          <p
            className={
              data.description
                ? "text-black font-light overflow-ellipsis whitespace-pre-wrap"
                : "text-slate-300 font-extralight"
            }
          >
            {!data.title && !data.description
              ? "Escribe algo"
              : !data.description
              ? "Nota sin contenido"
              : data.description}
          </p>
        </div>
         
          {dayjs(data.updatedAt).isAfter(data.createdAt) ? (
            <span className="text-xs font-light self-end">
              Hace {dayjs(data.updatedAt).fromNow(true)} <b>(Editado)</b>
            </span>
          ) : (
            <span className="text-xs font-light self-end">
              Hace {dayjs(data.createdAt).fromNow(true)}
            </span>
          )}
      </motion.div>
    </AnimatePresence>
  );
}

interface INoteCardProps {
  data: PublicNote;
}
