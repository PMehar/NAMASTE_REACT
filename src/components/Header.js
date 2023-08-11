import { LOGO_URL } from "../utils/config";
import { CART_LOGO_URL } from "../utils/config";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {
  
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser  } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between bg-white-100 shadow-lg border border-gray-200 mb-2  border-spacing-2"> 
      <div className="logo-container">
        <img className="w-36 p-4 object-cover h-20 rounded-full" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-2 text-xl font-serif">
          <li className="px-4">Online Status :{onlineStatus?"✅" :"❌"}</li>
          <li className="flex items-center px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li><img className="w-8" src={CART_LOGO_URL} /></li>
          <li><button
            className="login px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
