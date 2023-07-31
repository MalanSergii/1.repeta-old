import { Component } from 'react';
import { ColorBox } from './Colorpicker.styled';
import ColorlistItem from './colorListItem/ColorListItem.js/ColorlistItem';
import colors from 'data/colorPickerOptions.json';

class ColorPicker extends Component {
  state = {
    activeIndex: 0,
  };

  handleButtonClick = i => {
    this.setState({
      activeIndex: i,
    });
  };

  render() {
    return (
      <ColorBox>
        <p>
          curent color: {colors[this.state.activeIndex].label} {}
        </p>
        <div className="colorList">
          {colors.map((item, index) => (
            <ColorlistItem
              activeIndex={this.state.activeIndex}
              handleButtonClick={this.handleButtonClick}
              color={item.color}
              key={item.label}
              index={index}
              label={item.label}
            ></ColorlistItem>
          ))}
        </div>
      </ColorBox>
    );
  }
}

export default ColorPicker;
