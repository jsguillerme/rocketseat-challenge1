import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (localStorage.getItem('listTasks')) {
      let listTasks = JSON.parse(localStorage.getItem('listTasks') as any);
      setListAllTasks([...listTasks])
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (listAllTasks.length > 0) {
      localStorage.setItem('listTasks', JSON.stringify(listAllTasks));
    } else {
      return;
    }
  }, [listAllTasks])

  function addNewTaskInList(task: TasksType) {
    setListAllTasks([...listAllTasks, task])
  }

  function removeTaskInList(id: string) {
    if (listAllTasks.filter(task => task.id !== id).length > 0) {
      setListAllTasks(listAllTasks.filter(task => task.id !== id))
    } else {
      setListAllTasks([]);
    }
  }

  function updateTaskInList(taskUpdate: TasksType) {
    setListAllTasks(listAllTasks.map(task => task.id === taskUpdate.id ? { ...task, isCompleted: taskUpdate.isCompleted } : task))
  }

  return (
    <div className="w-full h-screen bg-figmaGray600">
      <header className="w-full h-52 bg-figmaGray700 grid place-items-center">
        <img src={logoTodo} alt="Logo ToDo" className='max-[615px]:object-cover' />
      </header>

      <Form
        registerNewTask={addNewTaskInList}
      />

      <section className='grid place-items-center mt-16'>
        <Tasks
          tasks={listAllTasks}
          removeTask={removeTaskInList}
          updateTask={updateTaskInList}
        />
      </section>

    </div>
  );
}

export default App
