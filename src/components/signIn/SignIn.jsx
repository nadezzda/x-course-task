import React, { useState, useRef, useContext} from "react";
import { Helmet } from 'react-helmet';
import { AuthContext } from "../../context/AuthContext";
import "./signIn.scss";
import defaultUserImage from '../../images/userImage.png';

export function SignIn() {
  const [userName, setUserName] = useState(null);
  const { handleLogin} = useContext(AuthContext);

  const userNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = userNameRef.current.value;
    setUserName(username);
  };
  
  const handleLogIn = () => {
    handleLogin(userName);
  };

  const isUserNameValid = userName && userName.length >= 4 && userName.length <= 16;
  const buttonDisabled = !isUserNameValid;

  return (
    <div className="sign">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <img src={defaultUserImage} alt="User" />
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" placeholder="Type username" onChange={handleSubmit} ref={userNameRef}/>
        <button type="button" onClick={handleLogIn} disabled={buttonDisabled}>
          Sign in
        </button>
      </form>
    </div>
  );
}
