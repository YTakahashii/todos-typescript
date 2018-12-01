import * as React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo/AddTodo';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
      </div>
    );
  }
}

export default App;
