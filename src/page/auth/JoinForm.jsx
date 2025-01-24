import React,{useState} from "react";
import "../../styles/auth/auth.css"
import {postJoin} from '../../api/auth';
function JoinForm(){
  const [joinForm, setJoinForm] = useState({
    email: "",
    password: "",
    username: "",
    age: "",
    AuthName : "USER"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJoinForm({ ...joinForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postJoin.then(res =>{
        if(res.status === 200 && res.data.success) alert("회원가입이 완료되었습니다!")
    }).catch(error => {
        console.log(error.reponse)
    })
  };
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            name="username"
            value={joinForm.username}
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
            value={joinForm.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            required
            min="1"
            max="120"
            />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={joinForm.email}
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
            value={joinForm.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
            Sign Up
        </button>
      </form>
    );
}

export default JoinForm;