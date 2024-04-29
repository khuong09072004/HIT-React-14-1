import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../../assets/images/user-avatar.jpg";
import "../Header/Header.scss"
const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("access_tolen");

    const handleLogin = () => {
        navigate("login");
    };

    const handleLogout = () => {
        navigate("/");
        localStorage.clear();
    };

    // const LoggedInUser = ({ handleLogout})=>{
    //     return(
    //         <div className="user">
    //             <div className="avatar">
    //                 <img src={userAvatar} alt="" />
    //             </div>
    //             <p>Hi, I'm Trang</p>
    //             <nav>
    //                 <ul>
    //                     <li> <Link to="/about-us"> About us</Link></li>
    //                     <li> <Link to="/contact"> Contact</Link></li>
    //                     <li onClick={handleLogout}>Logout</li>
    //                 </ul>
    //             </nav>

    //         </div>

    //     )
    // }


    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <h1>Start Bootstrap</h1>
                    </Link>
                    {!isLoggedIn ? (
                        <button onClick={handleLogin} title="login">Login</button>

                    ) : (
                        <div className="user">
                            <div className="avatar">
                                <img src={userAvatar} alt="" />
                            </div>
                            <p>Hi, I'm Trang</p>
                            <nav>
                                <ul>
                                    <li> <Link to="/about-us"> About us</Link></li>
                                    <li> <Link to="/contact"> Contact</Link></li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            </nav>

                        </div>
                    )}

                </div>
            </header>

        </>
    );


};

export default Header;
