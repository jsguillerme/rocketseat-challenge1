import { useEffect, useState } from 'react';
import { TasksType } from '../App';
import clipboardImg from '../assets/clipboard-image.png';
import { Task } from './Task';

interface TasksProps {
  tasks: TasksType[];
  removeTask: (id: string) => void;
}

export function Tasks({ tasks, removeTask }: TasksProps) {
  const [lengthTasksCompleted, setLengthTasksCompleted] = useState(0);

  useEffect(() => {
    countTasksCompleted(tasks)
  }, [tasks])

  function handleMarkTaskCompleted(id: string, isCompleted: boolean) {
    tasks.filter(t => {
      if (t.id === id) {
        t.isCompleted = isCompleted;
      }
    });
    countTasksCompleted(tasks)
  }

  function countTasksCompleted(tasksCount: TasksType[]) {
    let lengthArrayIsCompleted = tasksCount.filter(t => t.isCompleted === true);
    setLengthTasksCompleted(lengthArrayIsCompleted.length);
  }

  function removeTasksOfList(id: string) {
    removeTask(id);
    countTasksCompleted(tasks)
  }

  return (
    <div className="w-[596px]">
      <header className="w-full h-5 flex items-center justify-between mb-6 max-[615px]:flex-col max-[615px]:gap-3 max-[615px]:h-12">
        <div className="flex items-center text-figmaBlueLight font-bold gap-2 text-Size14">
          <p>Tarefas criadas</p>
          <div className="rounded-full bg-figmaGray400 px-2 py-[2px] text-white">{tasks.length}</div>
        </div>
        <div className="flex items-center text-figmaPurpleLight font-bold gap-2 text-Size14">
          <p>Concluídas</p>
          <div className="rounded-full bg-figmaGray400 px-2 py-[2px] text-white">{`${lengthTasksCompleted} de ${tasks.length}`}</div>
        </div>
      </header>

      <section className="border-t border-t-figmaGray400 rounded-lg grid place-items-center py-16">
        <div className='w-full flex flex-col items-center justify-center gap-4'>
          {tasks.length === 0 ? (
            <>
              <img src={clipboardImg} alt="Imagem de um clipboard" />
              <div>
                <p className='text-Size16 text-figmaGray300 font-bold'>Você ainda não tem tarefas cadastradas</p>
                <p className='text-Size16 text-figmaGray300'>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          ) : (
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isTaskCompleted={task.isCompleted}
                markTaskCompleted={handleMarkTaskCompleted}
                removeTaskOfList={removeTasksOfList}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

