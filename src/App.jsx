import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./App.css";
import Registrate from "./Components/Registrate";

export default function App(props) {
  const [register, setRegister] = useState(false);

  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required email"),
    password: Yup.string().min(4, "Qich e").required("Required password"),
  });

  return (
    <div className="container">
      <div>
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="logo"
          style={{ height: 106 + "px" }}
        />
        <h2 style={{ paddingLeft: "28px" }}>
          Facebook помогает вам всегда <br />
          оставаться на связи и общаться со <br />
          своими знакомыми.
        </h2>
      </div>
      <div>
        <div className="box_input">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validate}
          >
            <Form>
              <div className="pass_mail">
                <Field name="email" placeholder="Электронный адрес" />
                <ErrorMessage name="email" component="p" />
              </div>
              <div className="pass_mail">
                <Field name="password" placeholder="Пароль" type="password" />
                <ErrorMessage name="password" component="p" />
              </div>
              <div className="pass_mail">
                <button type="submit">Вход</button>
              </div>
              <div className="help">
                <span>Забыли пароль?</span>
              </div>
              <hr color="#dadde1" />
              <div className="registrate">
                <strong onClick={() => setRegister(!register)}>
                  Создать новый аккаунт
                </strong>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {register && (
        <div className="registrate_box">
          <div className="name_registrate">
            <h3>Регистрация</h3>
            <span onClick={() => setRegister(!register)}>x</span>
          </div>
          <p style={{ margin: "5px 0" }}>Быстро и легко.</p>
          <hr />
          <Registrate day={props.day} month={props.month} year={props.year} />
        </div>
      )}
    </div>
  );
}
