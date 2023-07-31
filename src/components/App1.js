import { Component } from 'react';
// import ColorPicker from './colorPicker';
// import Counter from './counter';
// import DropDown from './dropDown';
import ToDoList from './todoList';
import initialTodos from 'data/todoList.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  removeToDos = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(item => item.id !== id),
    }));
  };
  render() {
    const done = this.state.todos.reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);

    return (
      <>
        {/* <Counter></Counter> */}
        {/* <DropDown></DropDown> */}
        {/* <ColorPicker></ColorPicker> */}
        <ToDoList
          done={done}
          total={this.state.todos.length}
          removeToDos={this.removeToDos}
          todos={this.state.todos}
        ></ToDoList>
      </>
    );
  }
}

export default App;
