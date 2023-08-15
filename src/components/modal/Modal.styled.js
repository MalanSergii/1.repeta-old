import styled from '@emotion/styled';

export const ModalWindow = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modalContent {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    min-height: 100px;
    position: relative;
    background-color: #fff;
    padding: 40px;
  }
  .btnCloseModal {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
