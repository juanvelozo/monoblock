"use client";
import { ReactNode, useState } from "react";

export default function useModal() {
  const [isOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

export function Modal({
  onClose,
  open,
  content,
  disabled,
  loading,
  title,
  onConfirm,
}: IModalProps & IModalContent): JSX.Element | null {
  // render
  if (!open) {
    return null;
  }

  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-gray-300 bg-opacity-40 flex items-center justify-center">
      <dialog
        open={open}
        className={`bg-white lg:w-1/3 lg:h-min  rounded-xl shadow-sm relative`}
        onBlur={onClose}
      >
        {title ? (
          <div className="p-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <hr />
          </div>
        ) : null}
        <div className="p-3 min-h-20">{content}</div>
        <div className="w-full p-3 flex justify-between gap-2">
          <button
            disabled={disabled || loading}
            onClick={onClose}
            className="border-2 p-1 rounded-lg disabled:bg-opacity-60 disabled:text-gray-400 disabled:cursor-not-allowed w-full flex items-center justify-center"
          >
            Cerrar
          </button>
          <button
            disabled={disabled || loading}
            onClick={onConfirm}
            className="border-2 p-1 rounded-lg disabled:bg-opacity-60 disabled:text-gray-400 disabled:cursor-not-allowed w-full flex items-center justify-center"
          >
            Aceptar
          </button>
        </div>
      </dialog>
    </div>
  );
}
interface IModalProps {
  onClose: () => void;
  open: boolean;
}
interface IModalContent {
  content?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  title?: ReactNode;
  onConfirm: () => void;
}
