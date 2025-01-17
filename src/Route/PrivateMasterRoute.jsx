import React from "react";
import { Navigate } from "react-router-dom";

const PrivateMasterRoute = ({ authenticated, component: Component }) => {
  return authenticated === "ADMIN" 
  ? Component 
  : <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />;
};

export default PrivateMasterRoute;