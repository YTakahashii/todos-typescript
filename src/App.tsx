import * as React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo/AddTodo';
import VisibleTodoList from './containers/(Visible)TodoList/TodoList';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
