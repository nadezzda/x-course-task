import React, {useContext} from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
    const { isAuthenticated, logout, defaultUserImage, defaultCartImage } = useContext(AuthContext);
    const userName = localStorage.getItem("username");
    
    return (
        <header>
                {isAuthenticated ? ( 
                <nav>
                    <h1><Link to="/">JS BAND STORE /</Link><a href="https://endearing-taffy-335961.netlify.app/">Nadiia Malichenko</a></h1>
                    <Link to="/cart"><img src={defaultCartImage} id="cartImg" alt="Cart"/></Link>
                    <button id="signBtn" onClick={logout}>Sign Out</button>
                    <p id="user">{userName}</p>
                    <img src={defaultUserImage} id="avatarImg" alt="User"/>
                </nav>
                ) : (
                <nav>
                    <h1><Link to="/">JS BAND STORE /</Link> <a href="https://endearing-taffy-335961.netlify.app/">Nadiia Malichenko</a></h1>
                </nav>
                )}
        </header>
    );
}
