import ListItem from './listItem';
import TodoEditor from './todoEditor';

const ToDoList = ({ todos, removeToDos, total, done, onCheckboxChange, addTask }) => {
  return (
    <ul>
      <h3>To do List</h3>
      <p>Total todos:{total}</p>
      <p>completed: {done}</p>
      <TodoEditor addTask={addTask}></TodoEditor>
      {todos.map(({ id, text, completed }) => (
        <ListItem
          text={text}
          id={id}
          removeToDos={removeToDos}
          completed={completed}
          key={id}
          onCheckboxChange={onCheckboxChange}
        ></ListItem>
      ))}
    </ul>
  );
};

export default ToDoList;
