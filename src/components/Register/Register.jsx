import React from "react";
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { loginValidate } from '../ultis/loginValidate'
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
        <>
            <Formik
                initialValues={{
                    fullname: '',
                    email: '',
                    password: ''
                }}
                validationSchema={
                    loginValidate



                }
                onSubmit={(data) => {
                    console.log(data)
                }}

            >
                {({ errors, touched, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} >
                        <label htmlFor="fullname">FullName:</label>

                        <Field
                            type="text"
                            name="fullname"



                        />
                        <h1>Register</h1>
                        {errors.fullname && touched.fullname && <p style={{ color: 'red'}}>{errors.fullname}</p>}
                        <br /><br />
                        <label htmlFor="email">email:</label>
                        <Field
                            type="text"
                            name="email"
                            id="email"


                        />
                        {errors.email && touched.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <br /><br />
                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password" />
                        {errors.password && touched.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        <br /><br />
                        <button type="submit">Register</button>
                    </Form>
                )}

            </Formik>


        </>
    );
};

export default Register;

