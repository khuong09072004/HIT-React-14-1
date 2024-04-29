import React from "react";
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { loginValidate } from '../ultis/loginValidate'
import "../Register/Register.scss"
function Register() {
    // const formik =useFormik({
    //     initialValues:{
    //         fullname:'',
    //         email:'',
    //         password:''
    //     },
    //     validationSchema: Yup.object({
    //         fullname:Yup.string()
    //         .required("full name ko dung ")
    //         .min(5,"phai viet tren 5")
    //         ,

    //         email:Yup.string()
    //         .required("ko duoc bo trong")
    //         .email("ban dang nhap sai dinh dang email")
    //         .oneOf([Yup.ref('fullname')], "Khong dung")
    //         ,
    //         password:Yup.string()
    //         .required("ko duoc bo trong")




    //     }),
    //     onSubmit:(data)=>{
    //         console.log(data)
    //     }
    // })





    return (
        <div className="register">
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

                        <button type="submit" >Register</button>
                        <div className="footer">
                        <p>Not Login ? <a href="#">Create an account</a> </p>
                        </div>

                    </Form>

                )}


            </Formik>



        </div>


    );
};

export default Register;

