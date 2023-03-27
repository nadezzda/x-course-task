import React, {useContext} from "react";
import './header.scss';
import { Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import userImage from '../../images/userImage.png';
import signOutImage from '../../images/signOutImage.png';
import { LocalStorageService } from "../../services/localStorage";
import { CartButton } from "../cart";

export function Header() {
    const { isAuthenticated ,handleLogout } = useContext(AuthContext);
    const userName = LocalStorageService.get('username');
    
    const handleLogOut = () => {
        handleLogout(userName);
    };

    return (
        <header>
            {isAuthenticated ? ( 
                <nav>
                    <h1><Link to="/">JS BAND STORE /</Link> <a href="https://endearing-taffy-335961.netlify.app/">Nadiia</a></h1>
                    <Link to="/cart">
                        <CartButton />
                    </Link>
                    <img onClick={handleLogOut} id="signBtn" alt="Log out" src={signOutImage}/>
                    <p id="user">{userName}</p>
                    <img src={userImage} id="avatarImg" alt="User"/>
                </nav>
                ) : (
                <nav>
                    <h1><Link to="/">JS BAND STORE /</Link> <a href="https://endearing-taffy-335961.netlify.app/">Nadiia</a></h1>
                </nav>
            )}
        </header>
    );
}
