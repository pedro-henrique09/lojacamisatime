import { ChangeEvent, useState } from "react";

interface IProps {
  value: string;

  onChange: (value: string) => void;
}
const Input = ({ value, onChange }: IProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleMask = (event: any) => {
    console.log(event.key);
    const texto = event.key;

    if ("12345678".includes(texto)) {
      console.log("entrou");
    }
  };

  return (
    <input
      className="h-16 rounded-md bg-blue-400 w-full indent-8"
      type="text"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleMask}
    />
  );
};

export { Input };
