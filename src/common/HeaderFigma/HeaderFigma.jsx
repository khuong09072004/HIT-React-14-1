import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../HeaderFigma/HeaderFigma.scss'


function HeaderFigma(){
    const navigate = useNavigate();
    const isLogin =!!localStorage.getItem("login");

    const HandleLogout= () =>{
        localStorage.clear();
        navigate("/");
    }

    return(
        <>
        <header>
            <div className="container">
                <div className="top">
                    <div className="left"></div>
                    <div className="right"></div>        
                </div>
                {!isLogin ?(
                    <button onClick={()=>navigate('/login')}>Sign In</button>
                ):(
                    <div className="islogin">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/profile" id="profile"> Profile</Link>
                                </li>
                                <li>
                                    <button onClick={HandleLogout}>Logout</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

            </div>
        </header>
        

        </>
    )
}
export default HeaderFigma;