import React from "react";
import "../AboutUs/AboutUs.scss"
import Header from "../../common/Header/Header"
import Footer from "../../common/Footer/Footer"
import Content4 from "../../assets/images/content4.jpg";
import Content5 from "../../assets/images/content5.jpg";
import Content6 from "../../assets/images/content6.jpg";
import imgBanner from "../../assets/images/imgbanner.jpg";


function AboutUs() {
    return (
        <>
            <Header />
            <div className="banner1">

                <h1>About Us</h1>
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

            <Footer/>


        </>


    )

}

export default AboutUs;