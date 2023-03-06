import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const defaultUserImage = "https://cdn.icon-icons.com/icons2/602/PNG/512/Gender_Neutral_User_icon-icons.com_55902.png";
  const defaultCartImage = "https://cdn.icon-icons.com/icons2/2387/PNG/512/shopping_cart_market_ecommerce_icon_144576.png"; 

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("username") !== null
  );
  const navigate = useNavigate();
  const login = (username) => {
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    navigate("/");
  };

  

  return <AuthContext.Provider value={{login, logout, isAuthenticated, defaultUserImage, defaultCartImage} } {...props} />;
}

export { AuthContext, AuthProvider };
