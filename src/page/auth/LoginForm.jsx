import React, {  useState,createContext, Context } from "react";
import "../../styles/auth/loginForm.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../stores/context/UserContext";
import { postLogin} from "../../api/auth"
function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    userId: "",
    userPwd: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      postLogin(loginForm).then(res =>{
        const userInfo = res.data.data;   
        login(userInfo)
        if(userInfo.authName === "ROLE_USER") navigate("/")
        if(userInfo.authName === "ROLE_ADMIN") navigate("/admin")        
      }).catch(error => {
          const errorResult = error.response.data
          alert(errorResult.msg)
      }) 
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="userId"
            name="userId"
            value={loginForm.userId}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="userPwd"
            name="userPwd"
            value={loginForm.userPwd}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
                Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
