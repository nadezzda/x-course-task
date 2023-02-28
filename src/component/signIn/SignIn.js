import React from "react";
import "./signIn.scss";


export default function SignIn() {
    return(
        <div className="sign">
            <form>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Type username" />
            <button type="submit">
                Sign in
            </button>
            </form>
        </div> 
    );
}