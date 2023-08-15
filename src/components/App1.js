import { Component } from 'react';
import ColorPicker from './colorPicker';
import Counter from './counter';
import DropDown from './dropDown';
import ToDoList from './todoList';
import Input from './input';
import Form from './form/Form';

import initialTodos from 'data/todoList.json';
import { nanoid } from 'nanoid';
import Modal from './modal';

import LoginForm from './loginForm';
import Clock from './clock/Clock';
import IconButton from './iconButton/IconButton';
import { ReactComponent as Cloud } from './icons/cloud-drizzle.svg';
import { ReactComponent as Cofee } from './icons/coffee.svg';
import { ReactComponent as YouTube } from './icons/youtube.svg';

class App extends Component {
  state = {
    todos: initialTodos,
    formData: {},
    filtered: '',
    showModal: false,
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

  filter = text => {
    this.setState({
      filtered: text,
    });
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

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  componentDidMount() {
    const parsedTodos = JSON.parse(localStorage.getItem('todos'));
    if (parsedTodos) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos')),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    const normalizedFilter = this.state.filtered.toLowerCase();
    const filteredData = this.state.todos.filter(item =>
      item.text.toLowerCase().includes(normalizedFilter)
    );
    const done = this.state.todos.reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);

    return (
      <>
        {/* <button type="button" onClick={this.toggleModal}>
          open modal
        </button> */}
        {/* <Counter></Counter>
        <DropDown></DropDown>
        <ColorPicker></ColorPicker>
        <ToDoList
          filteredData={filteredData}
          filter={this.filter}
          onCheckboxChange={this.onCheckboxChange}
          addTask={this.addTask}
          done={done}
          total={this.state.todos.length}
          removeToDos={this.removeToDos}
          todos={this.state.todos}
        ></ToDoList>
        <Input></Input>
        <Form getDataFromForm={this.getDataFromForm}></Form>
        <LoginForm></LoginForm> */}
        {/* {this.state.showModal && (
          <Modal closeModal={this.toggleModal}>
            <Counter></Counter>
          </Modal>
        )} */}
        {/* {this.state.showModal && (
          <Modal closeModal={this.toggleModal}>
            <Clock />
          </Modal>
        )} */}
        <IconButton aria-label="1111">
          <Cloud fill="red"></Cloud>
        </IconButton>
        <IconButton aria-label="22">
          <Cofee fill="green"></Cofee>
        </IconButton>
        <IconButton aria-label="33">
          <YouTube fill="orange"></YouTube>
        </IconButton>
      </>
    );
  }
}

export default App;
