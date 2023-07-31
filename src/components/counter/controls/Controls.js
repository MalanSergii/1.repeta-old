const Controls = ({ increaseCounter, decreaseCounter }) => {
  return (
    <div>
      <button onClick={increaseCounter}>increse</button>
      <button onClick={decreaseCounter}>decrease</button>
    </div>
  );
};

export default Controls;
