import { useEffect, useState } from 'react';

export const useHome = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/todos.json');
      const data = await response.json();

      setAllTasks(data);
      setFilteredTasks(data);
    } catch (error) {
      alert('Error fetching tasks!');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleTaskCompletion = (id) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    setFilteredTasks(
      filteredTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
    setFilteredTasks(filteredTasks.filter((task) => task.id !== id));
  };

  const handleSearch = (value) => {
    if (value) {
      const filteredTask = allTasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTasks(filteredTask);
    } else {
      setFilteredTasks(allTasks);
    }
  };

  return {
    filteredTasks,
    toggleTaskCompletion,
    deleteTask,
    handleSearch,
  };
};
