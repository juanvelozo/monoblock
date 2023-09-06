"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react";
import Spinner, { SpinnerSize, SpinnerSizeType } from "../ui/Spinner";

type BtnColorType =
  | "default"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "dark";

type BtnSizeType = "sm" | "md" | "lg" | "xl";
type BtnVariantType = "contained" | "outlined" | "text";
type BtnTypeHTML = "button" | "submit" | "reset" | undefined;

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: BtnColorType;
  variant?: BtnVariantType;
  rounded?: BtnSizeType | "none";
  size?: BtnSizeType;
  disabled?: boolean;
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  loading?: boolean;
  fullWidth?: boolean;
  type?: BtnTypeHTML;
  className?: string | undefined;
}

// button component, consuming props
export default function Button({
  children,
  onClick,
  color = "default",
  size = "md",
  variant = "contained",
  disabled,
  buttonProps,
  rounded = "sm",
  loading,
  fullWidth,className,type
}: Props): JSX.Element {
  const ButtonColor: BtnColor = {
    danger: "bg-red-500 text-white hover:bg-red-600",
    dark: "bg-gray-800 text-white hover:bg-gray-900",
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-800",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    primary: "bg-blue-600 text-white hover:bg-blue-700 ",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-400 text-white hover:bg-yellow-500",
  };
  const ButtonTextColor: BtnColor = {
    danger: "!text-red-500  hover:text-red-600",
    dark: "!text-gray-800  hover:text-gray-900",
    default: "!text-gray-500  hover:text-gray-600 ",
    info: "!text-blue-500  hover:text-blue-600",
    primary: "!text-blue-600  hover:text-blue-700 ",
    success: "!text-green-500  hover:text-green-600",
    warning: "!text-yellow-400  hover:text-yellow-500",
  };

  const ButtonSize: BtnSize = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-8",
    xl: "py-4 px-20",
  };
  const SpinnerSize: SpinnerSize = {
    sm: "w-3 h-3",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5",
  };

  const ButtonPill: BtnRoundedSize = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const ButtonVariant: BtnVariant = {
    contained: `outline-transparent ${ButtonColor[color]}`,
    outlined: `!bg-transparent !hover:bg-current border-2 border-current ${ButtonTextColor[color]}`,
    text: `${ButtonTextColor[color]} outline-transparent`,
  };
  return (
    <button
      className={`${className} py-2 ${fullWidth ? "w-full" : "w-max"} ${
        ButtonPill[rounded]
      } disabled:text-opacity-70 disabled:cursor-not-allowed ${
        ButtonVariant[variant]
      } ${ButtonSize[size]} flex items-center justify-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
      type={type}
    >
      {loading ? (
        <Spinner
          color={ButtonTextColor[color]}
          size={SpinnerSize[size] as SpinnerSizeType}
        />
      ) : null}
      {children}
    </button>
  );
}

type BtnColor = {
  [x in BtnColorType]: string;
};
type BtnVariant = {
  [x in BtnVariantType]: string;
};
type BtnSize = {
  [x in BtnSizeType]: string;
};
type BtnRoundedSize = {
  [x in BtnSizeType | "none"]: string;
};
