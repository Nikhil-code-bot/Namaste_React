import { APP_LOGO } from "../../Utils/constants";
import { lazy, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlinestatus";
import UserContext from "../../Utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex space justify-between bg-gray-200 shadow-lg">
      <div className="w-1/12 py-4">
        <img src={APP_LOGO} style={{ marginLeft: "150px" }} />
      </div>
      <div>
        <ul className="flex p-5 m-5">
          <li className="content-center px-2">
            Online Status {onlineStatus ? "✅" : "☑️"}
          </li>
          <li className="content-center px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="content-center px-2">
            <Link to="/about">Abount Us</Link>
          </li>
          <li className="content-center px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="content-center px-2">
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="content-center px-2">Cart</li>
          <button
            className="content-center px-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="content-center px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
