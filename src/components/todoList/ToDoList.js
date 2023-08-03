import ListItem from './listItem';

const ToDoList = ({ todos, removeToDos, total, done }) => {
  return (
    <ul>
      <h3>To do List</h3>
      <p>Total todos:{total}</p>
      <p>completed: {done}</p>
      {todos.map(({ id, text, completed }) => (
        <ListItem
          text={text}
          id={id}
          removeToDos={removeToDos}
          completed={completed}
          key={id}
        ></ListItem>
      ))}
    </ul>
  );
};

export default ToDoList;