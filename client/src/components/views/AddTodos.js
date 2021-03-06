import { useState } from 'react';
import Swal from 'sweetalert2';

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: '',
    body: '',
  });

  const addTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: todo.title,
          description: todo.body,
          status: 'active',
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setTodo({
      title: '',
      body: '',
    });
    Swal.fire({
      icon: 'success',
      title: 'Great',
      text: 'Your todo has been added :D',
    });
  };

  return (
    <div className="container">
      <h1 className="text-center text-xl font-medium py-5">Add Todo</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="title" className="block pb-3">
          <div className="pb-1">Title</div>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            className="w-full border-none bg-gray-200 focus:bg-transparent focus:ring focus:ring-gray-400 rounded transition duration-200 ease-in"
          />
        </label>
        <label htmlFor="body" className="block pb-3">
          <div className="pb-1">Todo</div>
          <textarea
            rows="5"
            type="text"
            name="body"
            value={todo.body}
            onChange={handleChange}
            className="w-full border-none bg-gray-200 focus:bg-transparent focus:ring focus:ring-gray-400 rounded transition duration-200 ease-in"
          />
        </label>
        <label htmlFor="submit" className="block pb-3">
          <input
            type="submit"
            value="add"
            className="py-2 w-full border-none bg-gray-600 text-white font-medium cursor-pointer rounded focus:ring focus:ring-gray-400 transition duration-200 ease-in"
          />
        </label>
      </form>
    </div>
  );
};

export default AddTodo;
