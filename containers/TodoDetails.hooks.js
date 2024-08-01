import { useParams } from 'next/navigation';

const { useState, useEffect } = require('react');

export const useTodoDetails = () => {
  const [tasksDetails, setTaskDetails] = useState(null);
  const { slug } = useParams();

  const fetchTasks = async () => {
    try {
      const response = await fetch('/todos.json');
      const data = await response.json();
      const currTask = data.find((todo) => todo.id === slug);
      setTaskDetails(currTask);
    } catch (error) {
      alert('Error fetching tasks!');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasksDetails };
};
