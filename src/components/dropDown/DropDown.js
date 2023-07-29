import React, { Component } from 'react';

class DropDown extends Component {
  state = {
    visible: false,
  };
  toggleHiddenText = () => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <p>DropDown</p>
        <button onClick={this.toggleHiddenText}>{visible ? 'close' : 'open'}</button>
        {visible && <p>some hidden text</p>}
      </div>
    );
  }
}

export default DropDown;
