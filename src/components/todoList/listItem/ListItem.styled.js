import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 300px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .itemButton {
    margin-left: auto;
    background-color: orange;
  }
`;
