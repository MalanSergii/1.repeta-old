import { Component } from 'react';
import { ModalWindow } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBcDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <ModalWindow onClick={this.onBcDropClick}>
        <div className="modalContent">
          {this.props.children}
          <button type="button" className="btnCloseModal" onClick={this.props.closeModal}>
            close Modal
          </button>
        </div>
      </ModalWindow>
    );
  }
}

export default Modal;
