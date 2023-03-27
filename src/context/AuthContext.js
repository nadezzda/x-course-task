import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LocalStorageService } from "../services/localStorage";
import {  setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

function AuthContextProvider(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user && state.user.currentUser);
  const isAuthenticated = !!LocalStorageService.get('username');
  

  const handleLogin = (username) => {
    // set user to local storage 
    LocalStorageService.set('username', username);
    dispatch(setUser(username));
    navigate("/book-list");
  };
  const handleLogout = () => {
    // remove user from local storage
    LocalStorageService.remove('username');
    dispatch(setUser(null));
  };
  
  return (
    <AuthContext.Provider
      value={{ currentUser, isAuthenticated, handleLogin, handleLogout}}
      {...props}
    />
  );
}

export { AuthContext, AuthContextProvider };
