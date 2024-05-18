import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Birthday from "./Birthday";
import Gender from "./Gender";

export default function Registrate(props) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required name"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required lastName"),
    email: Yup.string()
      .min(2, "Qich e")
      .email("Invalid email")
      .required("Required email"),
    password: Yup.string().min(4, "Qich e").required("Required password"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupSchema}
      >
        <Form>
          <div className="form_input">
            <div className="name_lName">
              <Field name="name" placeholder="Имя" />
              <ErrorMessage name="name" component="p" />
              <Field name="lastName" placeholder="Фамилия" />
              <ErrorMessage name="lastName" component="p" />
            </div>
            <div className="email_password">
              <Field name="email" placeholder="Эл. адрес" />
              <ErrorMessage name="email" component="p" />
              <Field
                name="password"
                placeholder="Новый пароль"
                type="password"
              />
              <ErrorMessage name="password" component="p" />
            </div>
          </div>
          <Birthday day={props.day} month={props.month} year={props.year} />
          <Gender />
          <div className="button_box">
            <button type="submit">Регистрация</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
