import { Formik, Field, Form } from "formik";
import React from "react";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import './UserProfile.scss'
import AvatarUser from "../../assets/images/avt-user.png";
import date from "../../data/date.json" ;
import { RiErrorWarningFill } from "react-icons/ri";

function UserProfile() {

    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <div className="header">
                    <div className="left-header">
                        <span>Settings</span> <SlArrowRight style={{ fontSize: 10 }} />
                        <span>User Profile</span>
                    </div>
                    <div className="center-header">
                        <IoIosSearch />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="right-header">
                        <MdOutlineNotificationsActive />
                        <img src={AvatarUser} alt="" />
                    </div>

                </div>
                <div className="content-container">
                    <div className="side-bar">
                        <img src={AvatarUser} alt="" />
                        <a href="#">User Info</a>
                        <a href="#">Dashboard</a>
                        <a href="#">Favourites</a>
                        <a href="#">Settings</a>
                    </div>
                    <div className="content">
                        <div className="content-left">
                            <h1>User profile</h1>
                            {/* <Formik
                                initialValues={{
                                    username: " Ben Sherman",
                                    email: "ben.sherman@gmail.com",
                                    gender: "Male",
                                    birthday: {
                                        month: "7",
                                        day: "30",
                                        year: "1999",
                                    },
                                    language: "en",
                                    country: "US",
                                    password: "",
                                    newpassword: "",
                                    confirmpassword: "",

                                }}
                                // validationSchema={sdcfv}
                                // onSubmit={(data) => console.log(data)}
                            >
                                {({ errors, touched }) => (
                                    <Form className="form" >
                                        <div className="username-container">
                                            <label htmlFor="username">Username</label>
                                            <Field
                                                type="text"
                                                name="username"
                                                id="username"
                                            />
                                            {errors.username && touched.username &&
                                                <p className="error">   <RiErrorWarningFill />{errors.username}</p>}
                                        </div>
                                        <div className="email-container">
                                            <Field
                                                type="text"
                                                name="email"
                                                id="email"
                                            />
                                            {errors.email && touched.email &&
                                                <p className="error">   <RiErrorWarningFill />{errors.email}</p>}
                                        </div>
                                        <div className="gender-container">
                                            <label htmlFor="gender">Gender</label>
                                            <Field name="gender" id="gender">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>

                                            </Field>
                                            
                                        </div>
                                        <div className="birthday-container">
                                            <label htmlFor="birthday">Birthday</label>
                                            <div className="birthday-input">
                                                <div className="birthday-item">
                                                    <Field
                                                     as="select"
                                                     name="birthday-month"
                                                     id="birthday-month"
                                                     >
                                                        {date.months.map((month)=>(
                                                            <option value={month.number} key={month.number}>
                                                                {month.name}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                   
                                                </div>
                                                <div className="birthday-item">
                                                    <Field
                                                     as="select"
                                                     name="birthday-day"
                                                     id="birthday-day"
                                                     >
                                                        {date.days.map((day)=>(
                                                            <option value={day} key={day}>
                                                                {day}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                   
                                                </div>
                                                <div className="birthday-item">
                                                    <Field
                                                     as="select"
                                                     name="birthday-year"
                                                     id="birthday-year"
                                                     >
                                                        {date.years.map((year)=>(
                                                            <option value={year} key={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </Field>
                                                   
                                                </div>
                                            </div>

                                        </div>
                                        <div className="language-container">
                                            <label htmlFor="language">Language</label>
                                            
                                        </div>
                                    </Form>
                                )}


                            </Formik> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile;