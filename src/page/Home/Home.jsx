import React from "react";
import { NavLink, Link, Router } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
import "./Home.scss"


const Home = () => {
    return (
        <>
            <Header />
            <div className="banner1">

                <h1>Generate more leads with a professional landing page!</h1>
            </div>
            <div className="content">
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
                <div className="content2">
                    <div className="content2-item">
                        <div className="content2-items1">
                            <h2>Fully Responsive Design</h2>
                            <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                        <div className="content2-items2">
                            <img src={Content1} alt="" />
                        </div>

                    </div>
                    <div className="content2-item">

                        <div className="content2-items2">
                            <img src={Content2} alt="" />
                        </div>
                        <div className="content2-items1">
                            <h2>Updated For Bootstrap 5</h2>
                            <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                        </div>
                    </div>

                    <div className="content2-item">
                        <div className="content2-items1">
                            <h2>Easy to Use & Customize</h2>
                            <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                        </div>
                        <div className="content2-items2">
                            <img src={Content3} alt="" />
                        </div>
                    </div>





                </div>
                <div className="content3-real">
                    <div className="content3">
                        <h1>What people are saying...</h1>
                        <div className="content3-container">
                            <div className="content3-item">
                                <div className="avatar"><img src={Content4} alt="" /></div>

                                <div className="content3-items-child">
                                    <h3>Margaret E.</h3>
                                    <p>"This is fantastic! Thanks so much guys!"</p>
                                </div>
                            </div>
                            <div className="content3-item">
                                <div className="avatar"><img src={Content5} alt="" /></div>
                                <div className="content3-items-child">
                                    <h3>Fred S.</h3>
                                    <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                                </div>
                            </div>
                            <div className="content3-item">
                                <div className="avatar"><img src={Content6} alt="" /></div>
                                <div className="content3-items-child">
                                    <h3>Sarah W.</h3>
                                    <p>"Thanks so much for making these free resources available to us!"</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="banner2">
                <h1>Ready to get started? Sign up now!</h1>
                <button><Link to="/register"> Register</Link></button>

            </div>
            <Footer/>



        </>
    )

}
export default Home