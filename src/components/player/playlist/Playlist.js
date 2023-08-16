const Playlist = ({ list, onButtonCkick }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <button onClick={() => onButtonCkick(item.url)} style={{ minWidth: 400 }} type="button">
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
