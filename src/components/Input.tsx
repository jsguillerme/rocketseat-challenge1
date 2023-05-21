import { ChangeEvent } from "react"
import { TasksType } from "../App";

interface InputProps {
  contentOnChange: (value: TasksType) => void;
  contentValue: string | undefined;
}

export function Input({ contentOnChange, contentValue }: InputProps) {
  console.log(contentValue)

  function setOnChange(event: ChangeEvent<HTMLInputElement>) {
    contentOnChange({ content: event.target.value, isCompleted: false, id: '' })
  }

  return (
    <input
      className="h-[54px] w-[500px] bg-figmaGray500 p-4 rounded-lg placeholder:text-figmaGray300 text-figmaGray100 text-sm outline-none focus:border-figmaPurpleDark focus:border"
      type="text"
      value={contentValue}
      placeholder="Adicione uma nova tarefa"
      onChange={setOnChange}
    />
  )
}