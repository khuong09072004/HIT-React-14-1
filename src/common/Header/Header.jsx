import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../../assets/images/user-avatar.jpg";
import "./Header.scss"
const Header = () => {

    const navigate = useNavigate();
   
    const isLoggedIn = !!localStorage.getItem("login");
    console.log(isLoggedIn);

    const handleLogout =()=>{
        localStorage.clear();
        navigate("/");

    }




    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <h1>Start Bootstrap</h1>
                    </Link>
                    {!isLoggedIn ? (
                        <button onClick={() => navigate("/login")}>Login</button>

                        // <Link to="/login">Login </Link>

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
                                    <li onClick={handleLogout} >Logout</li>
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
