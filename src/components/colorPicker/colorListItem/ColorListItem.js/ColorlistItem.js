import { Color } from './ColorListItem.styled';

const ColorlistItem = ({ color, handleButtonClick, index, activeIndex }) => {
  return (
    <Color
      index={index}
      activeIndex={activeIndex}
      onClick={() => handleButtonClick(index)}
      color={color}
    ></Color>
  );
};

export default ColorlistItem;
