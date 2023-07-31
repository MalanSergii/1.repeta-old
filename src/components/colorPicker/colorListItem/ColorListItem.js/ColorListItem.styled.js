import styled from '@emotion/styled';

export const Color = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 60px;
  height: 60px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  transition: all 300ms linear;
  background-color: ${props => props.color};
  scale: ${props => (props.index === props.activeIndex ? 1.2 : 1)};
`;
