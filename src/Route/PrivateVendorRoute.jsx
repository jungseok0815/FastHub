import React from "react";
import { Navigate } from "react-router-dom";

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateVendorRoute = ({ authenticated, component: Component }) => {
  return authenticated === "USER" 
  ? Component 
  : <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />;
};

export default PrivateVendorRoute;;