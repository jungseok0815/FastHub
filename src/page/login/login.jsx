import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'url-search-params-polyfill'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
`;

const StyledLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/usr/select",null, {params : {
      usrEmail : formData.email,
      usrPwd : formData.password
    }} 
    )
    .then(res =>{
        console.log(res)
    }).catch(error => {
        console.log(error)
    })
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Fast Hub</Title>
        <Form>
          <InputGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </InputGroup>
          <LoginButton type="button" onClick={handleSubmit}>로그인</LoginButton>
        </Form>
        <LinkContainer>
          <StyledLink href="/forgot-password">비밀번호 찾기</StyledLink>
          <StyledLink href="/signup">회원가입</StyledLink>
        </LinkContainer>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;