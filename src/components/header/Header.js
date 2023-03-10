import React, {useContext} from "react";
import './header.scss';
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
    const { isAuthenticated, logout, defaultUserImage, defaultCartImage } = useContext(AuthContext);
    const userName = localStorage.getItem("username");

    return (
        <header>
                {isAuthenticated ? ( 
                <nav>
                    <h1><Link to="/signin">JS BAND STORE /</Link><a href="https://endearing-taffy-335961.netlify.app/">Nadiia</a></h1>
                    <Link to="/cart"><img src={defaultCartImage} id="cartImg" alt="Cart"/></Link>
                    <img onClick={logout} id="signBtn" alt="Log out" src="https://cdn.icon-icons.com/icons2/1524/PNG/512/signout_106525.png"/>
                    <p id="user">{userName}</p>
                    <img src={defaultUserImage} id="avatarImg" alt="User"/>
                </nav>
                ) : (
                <nav>
                    <h1><Link to="/signin">JS BAND STORE /</Link> <a href="https://endearing-taffy-335961.netlify.app/">Nadiia Malichenko</a></h1>
                </nav>
                )}
        </header>
    );
}
