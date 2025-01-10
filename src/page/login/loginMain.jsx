import React from "react";
import LoginForm from "../../componets/loginForm";
import "../../css/loginMain.css"
function loginMain(){
    return (
        <div className="loginMain">
          <div className="auth-container">
            <h1 className="auth-title">Welcome to FastHub</h1>
            <LoginForm />
          </div>
        </div>
      );
}

export default loginMain;