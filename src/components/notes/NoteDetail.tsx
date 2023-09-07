import { PublicNote } from "@/types/notes/note.type";
import { Suspense } from "react";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/relativeTime"; // import plugin
import es from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";
import CategoryTag from "../common/CategoryTags";

dayjs.locale(es);
dayjs.extend(localeData);
dayjs.extend(isLeapYear);

export default function NoteDetail({ data }: INoteDetailProps): JSX.Element {
  //render
  if (!data?.title && !data?.description) {
    return (
      <div className="space-y-2">
        <h2 className="text-4xl my-3">Nota vacía</h2>
        <hr />
        <span className="my-2 text-lg text-slate-800">
          Parece que esta nota no contiene nada
        </span>
        <br />
        <span className="my-2 text-sm text-slate-600 text-light ">
          ¿Te gustaría agregarle contenido? Haz clic en <b>Editar</b>
        </span>
      </div>
    );
  }
  return (
    <Suspense fallback={<h2>Cargando nota...</h2>}>
      <div className="space-y-2 w-full my-5 h-full">
        <h2
          className="text-4xl my-3 truncate"
          title={data.title ? data.title : "Título"}
        >
          {data?.title ? data?.title : "Nota sin título"}
          {!data?.title ? (
            <span className="m-2 text-sm text-slate-600 text-light">
              ¿Te gustaría agregarle título? Haz clic en <b>Editar</b>
            </span>
          ) : null}
        </h2>
        <hr />
        <div className="min-h-20 h-20">
          <span className="my-5 text-lg text-slate-800 text-light ">
            {data?.description ? data?.description : "Nota sin descripción"}
          </span>
          <br />
          {!data?.description && data.title ? (
            <span className="my-2 text-sm text-slate-600 text-light ">
              ¿Te gustaría agregarle contenido? Haz clic en <b>Editar</b>
            </span>
          ) : null}
        </div>
        <div className="w-full gap-1 flex items-center justify-end">
          <span className="text-xs font-light self-end">
            Hace {dayjs(data.createdAt).fromNow(true)}
          </span>
          {dayjs(data.updatedAt).isAfter(data.createdAt) ? (
            <span className="text-xs font-medium self-end">
              (Editado hace {dayjs(data.updatedAt).fromNow(true)})
            </span>
          ) : null}
        </div>

        {data.tags?.length ? (
          <div className="w-full gap-1 flex justify-end flex-col">
            <span className="font-light self-end">Etiquetas:</span>
            <CategoryTag tags={data.tags} />
          </div>
        ) : null}
      </div>
    </Suspense>
  );
}
interface INoteDetailProps {
  data: PublicNote;
}
