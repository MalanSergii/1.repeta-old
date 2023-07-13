const Painting = props => {
  const { name = 'noName', age, hobby } = props;
  return (
    <>
      name:{name}, age:{age}, hobby:{hobby}
    </>
  );
};

export default Painting;
