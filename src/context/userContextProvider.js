/** es-lint disable */
import React from "react";
import { useState } from "react";
import UserContex from "./UserContext";
import { useNavigate } from "react-router-dom";

function UserContextProvider(props) {
    let navigate = useNavigate()
  const [userInfo,setUserInfo] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const onLoginHandler = userInfo => {
    setIsUserLoggedIn(true);
    setUserInfo(userInfo)
    console.log("Usr Ctx", userInfo);
    // const _userInfo = {
    // }
    // setUserInfo(_userInfo);
  };

  const onLogOutHandler = () => {
    setIsUserLoggedIn(false);
    // setUserInfo(null);
    navigate("../Login");
  };

  let defaultObj = {
    userInfo : userInfo,
    isUserLoggedIn: isUserLoggedIn,
    loginHandler: onLoginHandler,
    logoutHandler: onLogOutHandler
  };

  return (
    <UserContex.Provider value={defaultObj}>
      {props.children}
    </UserContex.Provider>
  );
}

export default UserContextProvider;
