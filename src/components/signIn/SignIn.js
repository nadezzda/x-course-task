import React, { useState, useEffect, useContext } from "react";
import { Helmet } from 'react-helmet';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./signIn.scss";


export default function SignIn() {
  const [userName, setUserName] = useState(null);
  const { login, defaultUserImage } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  const handleSubmit = (event) => {
    setUserName(event.target.value);
  };
  
  function handleLogIn() {
    login(userName);
    navigate("/booklist");
  }
  
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
        <input id="username" name="username" type="text" placeholder="Type username" onChange={handleSubmit} />
        <button type="submit" onClick={handleLogIn} disabled={buttonDisabled}>
          Sign in
        </button>
      </form>
    </div>
  );
}
