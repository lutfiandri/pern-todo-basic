import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/Home';
import AddTodo from './components/views/AddTodos';
import Navbar from './components/layouts/Navbar';
import EditTodo from './components/views/EditTodo';

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTodo} />
          <Route exact path="/edit/:id" component={EditTodo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
