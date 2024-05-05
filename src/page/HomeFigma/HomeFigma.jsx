import React from "react";
import { NavLink, Link, Router } from "react-router-dom";
import HeaderFigma from "../../common/HeaderFigma/HeaderFigma";
import FooterFigma from "../../common/FooterFigma/FooterFigma";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "../HomeFigma/HomeFigma.scss";
import Img1 from "../../assets/images/image1.png";
import Img2 from "../../assets/images/image2.png";
import Img3 from "../../assets/images/image3.png";
import Img4 from "../../assets/images/image4.png";
import Img5 from "../../assets/images/image5.png";
import Img6 from "../../assets/images/image6.jpg";

function HomeFigma() {
    return (
        <>
            <HeaderFigma />

            <div className="container">
                <div className="banner">
                    <div className="banner-items">
                        <div className="banner-content">
                            <h1>Save your data storage here.</h1>
                            <p>
                                Data Warehouse is a data storage area that has been tested for
                                security, so you can store your data here safely but not be afraid
                                of being stolen by others.
                            </p>
                            <button className="button button-banner">Learn more</button>
                        </div>
                        <div className="banner-img">
                            <img src={Img1} alt="this-is-banner-image" />
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="features-items">
                        <div className="features-title">
                            <h3>Features</h3>
                            <p className="desc features-desc">
                                Some of the features and advantages that we provide for those of
                                you who store data in this Data Warehouse.
                            </p>
                        </div>
                        <div className="features-boxs">
                            <div className="box">
                                <div className="box-img">
                                    <img src={Img2} alt="" />
                                </div>
                                <div className="box-title box1">
                                    <h4>Search Data</h4>
                                    <p>
                                        Don’t worry if your data is very large, the Data Warehoue
                                        provides a search engine, which is useful for making it easier
                                        to find data effectively saving time.
                                    </p>
                                    <div className="learn-more">
                                        <p className="bold">Learn more</p>
                                        <GoArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-img">
                                    <img src={Img3} alt="" />
                                </div>
                                <div className="box-title box2">
                                    <div className="content">
                                        <h4>24 Hours Access</h4>
                                        <p>
                                            Access is given 24 hours a full morning to night and meet
                                            again in the morning, giving you comfort when you need data
                                            when urgent.
                                        </p>
                                        <div className="learn-more">
                                            <p className="bold">Learn more</p>
                                            <GoArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-img">
                                    <img src={Img4} alt="" />
                                </div>
                                <div className="box-title box3">
                                    <h4>Print Out</h4>
                                    <p>
                                        Print out service gives you convenience if someday you need
                                        print data, just edit it all and just print it.
                                    </p>
                                    <div className="learn-more">
                                        <p className="bold">Learn more</p>
                                        <GoArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-img">
                                    <img src={Img5} alt="" />
                                </div>
                                <div className="box-title box4">
                                    <h4>Security Code</h4>
                                    <p>
                                        Data Security is one of our best facilities. Allows for your
                                        files to be safer. The file can be secured with a code or
                                        password that you created, so only you can open the file.
                                    </p>
                                    <div className="learn-more">
                                        <p className="bold">Learn more</p>
                                        <GoArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="testimonials-box">
                        <div className="title-monial">
                            <h3>Testimonials</h3>
                        </div>

                        <div className="testimonials-content">
                            <GoArrowLeft />
                            <div className="comment-box">
                                <div className="avatar">
                                    <img src={Img6} alt="" />
                                </div>
                                <div className="info">
                                    <div className="info-up">
                                        <h5>John Fang</h5>
                                        <p>wordfaang.com</p>
                                    </div>
                                    <div className="info-down">
                                        <p>
                                            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                                            viverra enim erat tortor ultricies massa turpis. Arcu
                                            pulvinar aenean nam laoreet nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <GoArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            <FooterFigma />
        </>
    )
}

export default HomeFigma;