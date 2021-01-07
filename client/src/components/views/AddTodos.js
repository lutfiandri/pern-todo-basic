import { useState } from 'react';
import Swal from 'sweetalert2';

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: '',
    body: '',
    status: '',
  });

  // const addPost = async () => {
  //   try {
  //     const data = await axios.post('http://localhost:5000/api/todos', {
  //       title: todo.title,
  //       body: todo.body,
  //       // status: todo.status === 1 ? 'checked' : 'active',
  //     });
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addPost();
    setTodo({
      title: '',
      body: '',
      status: '',
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
        <label htmlFor="status" className="block pb-3">
          <input
            type="checkbox"
            name="status"
            value={todo.status}
            onChange={handleChange}
            className="rounded"
          />
          <div className="pb-1 pl-2 inline-block">Has done?</div>
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
