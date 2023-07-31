import styled from '@emotion/styled';

export const ColorBox = styled.div`
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid black;
  /* width: 500px; */

  .colorList {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  .color {
    border: 1px solid black;
    width: 60px;
    height: 60px;
    /* cursor: pointer; */

    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
