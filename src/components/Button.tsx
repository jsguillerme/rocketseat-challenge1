import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}

export function Button({ text, icon, ...props }: ButtonProps) {
  return (
    <button
      className={`w-24 h-[52px] p-4 gap-2 flex items-center bg-figmaBlueDark rounded-lg text-figmaGray100 font-bold text-Size14 hover:bg-figmaBlueLight hover:transition-all hover:duration-300 disabled:cursor-not-allowed disabled:bg-opacity-60`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
}