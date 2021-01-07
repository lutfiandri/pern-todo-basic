import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/todos');
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteFromList = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const list = todos.map((t) => (
    <TodoCard key={t.id} todo={t} deleteFromList={deleteFromList} />
  ));

  return <div>{list}</div>;
};

export default TodoList;
