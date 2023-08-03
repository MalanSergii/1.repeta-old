import { Item } from './ListItem.styled';

const ListItem = ({ id, text, completed, removeToDos, onCheckboxChange }) => {
  return (
    <Item>
      <label>
        {text}
        <input onChange={() => onCheckboxChange(id)} type="checkbox" checked={completed}></input>
      </label>
      <button className="itemButton" onClick={() => removeToDos(id)}>
        delete
      </button>
    </Item>
  );
};

export default ListItem;
