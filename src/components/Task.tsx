import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";
import { useEffect, useState } from "react";

interface TaskProps {
  content: string;
  isTaskCompleted: boolean;
  id: string;
  markTaskCompleted: (id: string, isCompleted: boolean) => void;
  removeTaskOfList: (id: string) => void;
}

export function Task({ content, isTaskCompleted, id, markTaskCompleted, removeTaskOfList }: TaskProps) {
  const [taskCompleted, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(isTaskCompleted)
  }, [isTaskCompleted])

  function handleToggleTaskCompleted() {
    setCompleted(!taskCompleted);
    markTaskCompleted(id, !taskCompleted)
  }

  function handleRemoveTasks(id: string) {
    removeTaskOfList(id)
  }

  return (
    <div className="w-full h-[72px] bg-figmaGray500 p-4 flex items-center gap-3 justify-between text-Size14 text-white rounded-lg">
      <div className="flex items-center gap-4">
        <Checkbox
          setTaskCompleted={handleToggleTaskCompleted}
          isCompleted={taskCompleted}
        />

        <p className={`text-left w-fit ${taskCompleted && 'line-through text-figmaGray300'}`}
        >
          {content}
        </p>
      </div>

      <button
        onClick={() => handleRemoveTasks(id)}
        className="text-figmaGray300 p-2 rounded-lg outline-none hover:bg-figmaGray400 hover:transition-all hover:duration-300 hover:text-figmaFeedBack focus:text-figmaFeedBack focus:outline-2 focus:outline-offset-2 focus:outline-figmaFeedBack"
      >
        <Trash size={20} />
      </button>
    </div>
  );
}