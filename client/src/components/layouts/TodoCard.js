const TodoCard = ({ todo }) => {
  const { id, title, description, status } = todo;
  const isActive = status === 'active';

  const deleteTodo = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded border my-2">
      <div className="bg-gray-100 flex flex-row items-center">
        <div
          className={`${
            !isActive ? 'text-gray-500' : 'text-black'
          } flex-grow pl-4 font-semibold`}
        >
          {title}
        </div>
        <div
          onClick={deleteTodo}
          role="button"
          className="py-4 px-4 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
      <div
        className={`${!isActive ? 'text-gray-500' : 'text-black'} px-4 py-2`}
      >
        {description}
      </div>
    </div>
  );
};

export default TodoCard;