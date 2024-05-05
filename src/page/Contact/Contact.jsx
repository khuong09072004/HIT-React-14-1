import React from "react";
import "../Contact/Contact.scss";
import { NavLink, Link, Router } from "react-router-dom";
import Header from "../../common/Header/Header"
import Footer from "../../common/Footer/Footer"
import imgBanner from "../../assets/images/imgbanner.jpg";
import { FaInstalod } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import Content1 from "../../assets/images/content1.jpg";
import Content2 from "../../assets/images/content2.jpg";
import Content3 from "../../assets/images/content3.jpg";
import Content4 from "../../assets/images/content4.jpg";
import Content5 from "../../assets/images/content5.jpg";
import Content6 from "../../assets/images/content6.jpg";

function Contact() {
    return (
        <>
            <Header/>
            <div className="banner1">

                <h1>Contact</h1>
            </div>
            <div className="content1">
                <div className="conten1-container">
                    <div className="content1-items">
                        <div className="icon"><FaInstalod /></div>
                        <h2>Fully Responsive</h2>
                        <p>This theme will look great on any device, no matter the size!</p>
                    </div>
                    <div className="content1-items">
                        <div className="icon"><BsBootstrapFill /></div>
                        <h2>Bootstrap 5 Ready</h2>
                        <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                    </div>
                    <div className="content1-items">
                        <div className="icon"><DiApple /></div>
                        <h2>Easy to Use</h2>
                        <p>Ready to use with your own content, or customize the source files!</p>
                    </div>
                </div>

            </div>

            <Footer/>



        </>
    )

}

export default Contact;