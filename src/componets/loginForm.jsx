import React, { useState } from "react";
import "../css/loginForm.css";
import axios from 'axios';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,  // 쿠키 처리를 위해 필수
});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      e.preventDefault();
      api.post("/api/auth/login",null, {params : {
        userId : formData.email,
        userPwd : formData.password
      }} 
      )
      .then(res =>{
          const userInfo = res.data.data;   
          if(res.status === 200){
            userInfo.authName === "ROLE_USER" ? window.location.href ="/" : window.location.href = "/manager"
            window.location.href = "/";
          }
      }).catch(error => {
          console.log(error)
      })
    } else {
      e.preventDefault();
      axios.post("http://localhost:8080/api/auth/join",null, {params : {
        userId : formData.email,
        userPwd : formData.password,
        userNm : formData.username,
        userAge : formData.age,
        authName : "USER"
      }} 
      )
      .then(res =>{
          if(res.status === 200 && res.data.success){
            alert("회원가입이 완료되었습니다!")
            window.location.reload()
          }else{
            alert("회원가입에 실패했습니다!")
          }
      }).catch(error => {
          console.log(error)
      })
    }
  };

  return (
    <div className="auth-form">
      <div className="form-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
            <>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                required
                min="1"
                max="120"
              />
            </div>
          </>
        
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
