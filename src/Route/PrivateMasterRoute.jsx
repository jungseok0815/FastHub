import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../stores/context/UserContext";

const PrivateMasterRoute = ({ component: Component }) => {
  const { user } = useAuth();

  if(user === null){
    return <Navigate to="/" {...alert("접근할 수 없는 페이지 입니다")}></Navigate>
  }
  return user.authName === "ROLE_ADMIN" 
  ? Component 
  : <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />;
};

export default PrivateMasterRoute;