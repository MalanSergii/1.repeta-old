const ListItem = ({ id, text, completed, removeToDos }) => {
  return (
    <li>
      <span>{text}</span>
      <label>
        <input type="checkbox"></input>
      </label>
      <button onClick={() => removeToDos(id)}>delete</button>
    </li>
  );
};

export default ListItem;
