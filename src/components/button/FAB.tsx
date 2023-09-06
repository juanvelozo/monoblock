"use client"
import { MouseEventHandler } from "react";

export const FastActionButton = ({onClick}:IFABProps): JSX.Element => {
  return (
    <div onClick={onClick} className="w-10 h-10 bg-blue-500 flex items-center justify-center fixed bottom-16 right-16 rounded-full text-white select-none cursor-pointer hover:bg-opacity-75 transition-all ease-in-out duration-150">
      +
    </div>
  );
};

interface IFABProps{
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}