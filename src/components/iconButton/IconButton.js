const IconButton = ({ onClick, children }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default IconButton;
