import { Component } from 'react';
import colors from 'data/colorPickerOptions.json';
import { ColorBox } from './Colorpicker.styled';

class ColorPicker extends Component {
  state = {};

  render() {
    return (
      <ColorBox>
        <p>curent color:</p>
        <ul className="colorList">
          {colors.map(item => (
            <li className="color" color={item.color} key={item.label}></li>
          ))}
        </ul>
      </ColorBox>
    );
  }
}

export default ColorPicker;
