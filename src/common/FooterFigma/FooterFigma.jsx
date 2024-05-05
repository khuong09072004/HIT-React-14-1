import React from "react";
import { Link } from "react-router-dom";
import "./FooterFigma.scss";

function FooterFigma() {
    return (
        <>
            <div className="footer1"></div>
            <footer>
                <div className="container">
                    <div className="footer2">
                        <div className="footer2-items">
                            <div className="footer2-top">
                                <div className="logo">
                                    <div className="left"></div>
                                    <div className="right"></div>
                                </div>
                                <div className="title">DataWarehouse</div>
                            </div>
                            <div className="footer2-item">
                                <p>Warehouse Society, 234 </p>
                                <p> Bahagia Ave Street  PRBW 29281</p>
                            </div>
                            <div className="footer2-item">
                                <p>info@warehouse.project</p>
                                <p>1-232-3434 (Main)</p>
                            </div>
                            <div className="footer2-item">
                                <p>© Datawarehouse™, 2020. All rights reserved.</p>
                                <p>Company Registration Number: 21479524.</p>
                            </div>
                        </div>
                        <div className="footer2-items-2">
                            <div className="footer2-items-left">
                                <div className="title">About</div>
                                <p>Profile</p>
                                <p>Features</p>
                                <p>Careers</p>
                                <p>DW News</p>
                            </div>
                            <div className="footer2-items-right">
                                <div className="title">Help</div>
                                <p>Support</p>
                                <p>Sign up</p>
                                <p>Guide</p>
                                <p>Reports</p>
                                <p>Q&A</p>
                            </div>

                        </div>
                        <div className="footer2-items-3">
                            <div className="title">Social Media</div>
                            <div className="icon">
                                <div className="icon-top">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="icon-bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default FooterFigma;

