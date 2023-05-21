import { Check } from "phosphor-react";
import { useState } from "react";

interface CheckboxProps {
  setTaskCompleted: () => void;
}

export function Checkbox({ setTaskCompleted }: CheckboxProps) {
  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  function handleToogleCheckbox() {
    setToggleCheckbox(!toggleCheckbox);
    setTaskCompleted();
  }

  return (
    <button
      onClick={handleToogleCheckbox}
      className={
        `h-6 w-6 relative border-2 outline-none rounded-full border-figmaBlueLight hover:border-figmaBlueDark hover:cursor-pointer
        ${toggleCheckbox && 'bg-figmaPurpleDark border-figmaPurpleDark transition-all duration-200 hover:bg-figmaPurpleLight hover:border-figmaPurpleLight hover:transition-all hover:duration-200'}
        focus:outline-2 focus:outline-offset-2 focus:outline-figmaPurpleDark
      `}
    >
      {toggleCheckbox && <Check
        className="absolute top-[0.5px] right-[0.5px]"
        size={18}
        weight="bold"
      />}
    </button>
  )
}

<input
  className="appearance-none h-7 w-7 border-2 rounded-full border-figmaBlueLight hover:border-figmaBlueDark hover:cursor-pointer checked:bg-figmaPurpleDark checked:border-figmaPurpleDark checked:transition-all checked:duration-200 focus:outline-none checked:hover:bg-figmaPurpleLight checked:hover:border-figmaPurpleLight hover:transition-all hover:duration-200"
  type="checkbox"
/>