function FilterTasks({ filter }) {
  return (
    <label>
      <input
        onChange={e => {
          filter(e.target.value);
        }}
      ></input>
      filter
    </label>
  );
}
export default FilterTasks;
