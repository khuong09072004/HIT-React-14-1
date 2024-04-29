import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.scss"
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-left">
                        <ul>
                            <li><Link to="/about-us"> About us</Link></li>
                            <li><Link to="/contact"> contact</Link></li>
                            <li><Link to="/login"> Login</Link></li>
                            <li><Link to="/register"> Sign up</Link></li>
                        </ul>
                        <p className="footer-content">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <div className="icon"><FaFacebook  /></div>
                        <div className="icon"> <AiOutlineTwitter /></div>
                        <div className="icon"><AiFillInstagram /></div>
                        
                        
                        


                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;