import * as React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo/AddTodo';
import VisibleTodoList from './containers/(Visible)TodoList/TodoList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
