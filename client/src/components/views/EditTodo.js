import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const EditTodo = () => {
  const history = useHistory();
  const { id } = useParams();
  const [todo, setTodo] = useState({
    id: '',
    title: '',
    description: '',
    status: '',
  });

  const getTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`);
      const data = await response.json();
      console.log(data);
      setTodo(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: todo.title,
          description: todo.description,
        }),
      });
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Great',
        text: 'Your todo has been updated :D',
      }).then(() => {
        history.push('/');
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-medium py-5">Edit Todo</h1>

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

        <label htmlFor="description" className="block pb-3">
          <div className="pb-1">Todo</div>
          <textarea
            rows="5"
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
            className="w-full border-none bg-gray-200 focus:bg-transparent focus:ring focus:ring-gray-400 rounded transition duration-200 ease-in"
          />
        </label>

        <label htmlFor="submit" className="block pb-3">
          <input
            type="submit"
            value="save"
            className="py-2 w-full border-none bg-gray-600 text-white font-medium cursor-pointer rounded focus:ring focus:ring-gray-400 transition duration-200 ease-in"
          />
        </label>
      </form>
    </div>
  );
};

export default EditTodo;
