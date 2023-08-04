import { Field, Form, Formik, ErrorMessage } from 'formik';
import { ErrorMess, Input } from './LoginForm.styled';
import { object, string, number, date, InferType } from 'yup';

const schema = object().shape({
  name: string().required('no no no'),
  password: string().required('test error message'),
});

const initialValues = {
  name: '',
  password: '',
};

const LoginForm = () => {
  function onSubmit(values, actions) {
    const data = values;
    console.log('data', data);

    actions.resetForm();
  }
  return (
    <Formik validationSchema={schema} initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label>
          <Input type="text" name="name"></Input>
          name
          <ErrorMess name="name" />
        </label>
        <br />
        <label>
          <Field type="text" name="password"></Field>
          password
          <ErrorMess name="password" />
        </label>
        <br />
        <button type="submit">submit </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
