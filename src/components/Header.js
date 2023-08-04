import { LOGO_URL } from "../utils/config";
import { CART_LOGO_URL } from "../utils/config";
import { useState } from "react";

const Header = () => {
  console.log("Header rendered")
  const [btnName , setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img className="cart" src={CART_LOGO_URL}/>
          <button className="login" onClick={()=>{
            btnName === "Login" ? setBtnName("Logout"):setBtnName("Login");
            console.log(btnName);
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;