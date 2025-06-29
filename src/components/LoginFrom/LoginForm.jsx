import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

import { useDispatch } from "react-redux";
import {logIn} from "../../redux/auth/operations"

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <button className={css.button}type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
