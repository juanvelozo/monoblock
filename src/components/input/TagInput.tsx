import { Control, FieldValues } from "react-hook-form";
import { Input } from "./Input";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export default function TagInput({
  control,
  name,
  onChange,
  onKeyDown,
}: ITagInputProps): JSX.Element {
  return (
    <Input
      control={control}
      name={name}
      placeholder="Categorías"
      className="w-full focus-visible:outline-none"
      props={{ onKeyDown: onKeyDown }}
      type="text"
    />
  );
}

interface ITagInputProps {
  control: Control<FieldValues>;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
}
