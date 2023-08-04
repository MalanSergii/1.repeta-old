import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';

export const Input = styled(Field)`
  background-color: green;
  color: white;
`;

const ErrorText = styled.p`
  margin: 0;
  color: red;
`;

export const ErrorMess = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};
