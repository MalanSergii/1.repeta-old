import FilterTasks from './filter';
import ListItem from './listItem';
import TodoEditor from './todoEditor';

const ToDoList = ({
  todos,
  removeToDos,
  total,
  done,
  onCheckboxChange,
  addTask,
  filter,
  filteredData,
}) => {
  return (
    <ul>
      <h3>To do List</h3>
      <p>Total todos:{total}</p>
      <p>completed: {done}</p>
      <TodoEditor addTask={addTask}></TodoEditor>
      <FilterTasks filter={filter}></FilterTasks>
      {filteredData.map(({ id, text, completed }) => (
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
