import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}

export function Button({ text, icon, ...props }: ButtonProps) {
  return (
    <button
      className={`w-24 h-[52px] p-4 gap-2 flex items-center justify-center bg-figmaBlueDark rounded-lg text-figmaGray100 font-bold text-Size14 hover:bg-figmaBlueLight hover:transition-all hover:duration-300 disabled:cursor-not-allowed disabled:brightness-75 disabled:hover:bg-none max-[615px]:w-3/12 max-[615px]:justify-center`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
}