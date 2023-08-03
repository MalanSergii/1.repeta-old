import { Component } from 'react';
// import ColorPicker from './colorPicker';
// import Counter from './counter';
// import DropDown from './dropDown';
import ToDoList from './todoList';
// import Input from './input';
// import Form from './form/Form';

import initialTodos from 'data/todoList.json';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    todos: initialTodos,
    formData: {},
  };

  removeToDos = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(item => item.id !== id),
    }));
  };

  getDataFromForm = data => {
    this.setState({
      formData: data,
    });
  };

  onCheckboxChange = id => {
    this.setState(prev => ({
      todos: prev.todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  addTask = text => {
    const exist = this.state.todos.find(item => item.text === text);
    if (text && !exist) {
      this.setState(prev => ({
        todos: [...prev.todos, { id: nanoid(), text: text, completed: false }],
      }));
    }
    if (!text) {
      alert('Add task please...');
    }
    if (exist) {
      alert('this task already exist, try to give another name');
    }
  };

  render() {
    const done = this.state.todos.reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);

    return (
      <>
        {/* <Counter></Counter> */}
        {/* <DropDown></DropDown> */}
        {/* <ColorPicker></ColorPicker> */}
        <ToDoList
          onCheckboxChange={this.onCheckboxChange}
          addTask={this.addTask}
          done={done}
          total={this.state.todos.length}
          removeToDos={this.removeToDos}
          todos={this.state.todos}
        ></ToDoList>
        {/* <Input></Input> */}
        {/* <Form getDataFromForm={this.getDataFromForm}></Form> */}
      </>
    );
  }
}

export default App;
