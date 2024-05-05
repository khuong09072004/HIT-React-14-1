import React from "react";
import { Field, Form, Formik, useFormik } from "formik";
import "../LoginFigma/LoginFigma.scss"
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { loginValidate } from "../../components/ultis/loginValidate";
import { RiErrorWarningFill } from "react-icons/ri";

function LoginFigma() {
    const naviga = useNavigate();


    return (

        <div className="login-figma">
            <div className="top">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={loginValidate}
                onSubmit={async (values) => {
                    try {
                        const { data } = await axios.post("  https://reqres.in/api/login", values);
                        localStorage.setItem("login", data.token);// luu gia tri
                        sessionStorage.setItem("login1", data.token);

                        naviga("/");



                    } catch (error) {
                        console.log(error);
                    }
                }}
            // onSubmit={(data) => console.log(data)}
            >
                {({ errors, touched }) => (
                    <Form >
                        <h1>Sign In</h1>
                        <div className="input">
                            <Field
                                type="text"
                                name="username"
                                id="username"
                                placeholder="username"

                            />
                            {errors.username && touched.username &&
                                <p className="error"> <RiErrorWarningFill /> {errors.username}</p>
                            }
                        </div>
                        <div className="input">
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                            />
                            {errors.password && touched.password &&
                                <p className="error">   <RiErrorWarningFill />{errors.password}</p>
                            }
                        </div>

                        <button type="submit" >Sign In</button>
                        

                    </Form>

                )}


            </Formik>

        </div>
    )
}

export default LoginFigma;