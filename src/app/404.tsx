import { routes } from "@/constants/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function Error(): Promise<JSX.Element> {
  //constants

    return (
      <>
        <hr />
        <h2 className="my-3 text-6xl font-light text-slate-400">
          Error al consultar la data
        </h2>
        <span>Parece que la nota ya no existe.</span><br/>
        <span>¿Querés crear tu primer nota?</span>
        <Link
          className="mx-2 font-bold text-slate-400"
          href={routes.createNote}
        >
          Click aquí
        </Link>
      </>
    );
 
}
