import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/views/Home';
import AddTodo from './components/views/AddTodos';

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddTodo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
