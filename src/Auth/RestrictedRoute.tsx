import React from "react";
import { Redirect, Route } from "react-router-dom";

const RestrictedRoute = (props:any) => {
  // const isAuth  = false

  const token = localStorage.getItem('auth');

  console.log("token",token);
 
  return <>{!token ? <Route {...props} /> : <Redirect to="/" />}</>;

};

export default RestrictedRoute;