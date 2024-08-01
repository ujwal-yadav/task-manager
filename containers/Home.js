'use client';

import TaskList from '../components/tasklist';
import { Navbar } from '@/components/navbar';
import { useHome } from './Home.hooks';

export default function Home() {
  const { filteredTasks, toggleTaskCompletion, deleteTask, handleSearch } =
    useHome();

  return (
    <main>
      <Navbar handleSearch={handleSearch} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </main>
  );
}
