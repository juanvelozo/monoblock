"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FastActionButton } from "../button/FAB";
import { routes } from "@/constants/routes";
export const Navbar = ({ tabView }: ITabViewProps): JSX.Element|null => {
  //constants
  //states
  //   const [currentPath, setCurrentPath] = useState<string>("");
  //hooks
  const pathName = usePathname();
  const { push } = useRouter();
  //functions

  //effects

  //render
  if(pathName !== routes.notes && pathName !== routes.profile){
    return null
  }
  return (
    <>
      {pathName === routes.notes ? (
        <FastActionButton onClick={() => push(routes.createNote)} />
      ) : null}
      <ul className="container mx-auto px-10 py-5 list-none flex flex-start items-center gap-3">
        {tabView.map((el, i) => {
          return (
            <li className="flex items-center" key={i}>
              <Link
                href={el.href}
                className={`${
                  pathName.split("/")[1] === el.href.split("/")[1]
                    ? "font-bold"
                    : "font-light"
                } text-3xl transition-all ease-in-out duration-150 relative`}
              >
                {pathName.split("/")[1] === el.href.split("/")[1] ? (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-[105%] h-2 w-2 rounded-full bg-black left-1/2 right-1/2"
                  />
                ) : null}
                {el.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

interface ITab {
  value: string;
  href: string;
  icon?: string;
}
interface ITabViewProps {
  tabView: ITab[];
}
