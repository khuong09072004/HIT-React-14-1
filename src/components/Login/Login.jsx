import React from "react";
import { Field, Form, Formik, useFormik } from "formik";
import '../Login/Login.scss'
import * as Yup from 'yup';
import { loginValidate } from "../ultis/loginValidate";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios'

function Login() {

    return (
        <div className="login">
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={loginValidate}
                onSubmit={async(values)=>{
                    try{
                        const {data} = await axios.post(" https://reqres.in/api/login",values);
                        localStorage.setItem("login",data.token);// luu gia tri
                        sessionStorage.setItem("login1",data.token);

                        console.log(data);
                    }catch(error){
                        console.log(error);
                    }
                }}
                // onSubmit={(data) => console.log(data)}
            >
                {({ errors, touched }) => (
                    <Form >
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

                        <button type="submit" >LOGIN</button>
                        <div className="footer">
                        <p>Not registered ? <a href="#">Create an account</a> </p>
                        </div>

                    </Form>

                )}


            </Formik>



        </div>


    );
};

export default Login;