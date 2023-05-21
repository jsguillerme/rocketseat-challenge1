import { PlusCircle } from "phosphor-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { FormEvent, useState } from "react";
import { TasksType } from "../App";
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  registerNewTask: (task: TasksType) => void;
}

export function Form({ registerNewTask }: FormProps) {
  const [contentNewTask, setContentNewTask] = useState<TasksType>();

  console.log('ContentNewTask', contentNewTask)

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    registerNewTask({ ...contentNewTask!, id: uuidv4() })
    setContentNewTask({ content: '', isCompleted: false, id: uuidv4() })
  }

  function handleChangeContentTask(value: TasksType) {
    setContentNewTask(value)
  }

  return (
    <form
      onSubmit={handleAddNewTask}
      className='flex items-center justify-center gap-2 -mt-6'
    >
      <Input
        contentOnChange={handleChangeContentTask}
        contentValue={contentNewTask?.content}
      />
      <Button
        text='Criar'
        icon={<PlusCircle size={24} />}
        disabled={contentNewTask?.content.trim() === ''}
      />
    </form>
  );
}