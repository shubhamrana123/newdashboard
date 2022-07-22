import React from "react";
const UserContex = React.createContext({
  isUserLoggedIn: Boolean,
  userInfo : {},
  loginHandler: () => {},
  logoutHandler: () => {}
});
export default UserContex;
