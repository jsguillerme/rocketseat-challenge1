import { useState } from 'react';
import logoTodo from './assets/logo-todo.svg';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';

export type TasksType = {
  id: string;
  isCompleted: boolean,
  content: string;
}

function App() {
  const [listAllTasks, setListAllTasks] = useState<TasksType[]>([]);

  function addNewTaskInList(task: TasksType) {
    setListAllTasks([...listAllTasks, task])
  }

  function removeTaskInList(id: string) {
    setListAllTasks(listAllTasks.filter(task => task.id !== id))
  }

  return (
    <div className="w-full h-screen bg-figmaGray600">
      <header className="w-full h-52 bg-figmaGray700 grid place-items-center">
        <img src={logoTodo} alt="Logo ToDo" className='max-[615px]:object-cover'/>
      </header>

      <Form
        registerNewTask={addNewTaskInList}
      />

      <section className='grid place-items-center mt-16'>
        <Tasks
          tasks={listAllTasks}
          removeTask={removeTaskInList}
        />
      </section>

    </div>
  );
}

export default App
