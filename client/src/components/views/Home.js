import TodoList from '../layouts/TodoList';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center text-xl font-medium py-5">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default Home;
