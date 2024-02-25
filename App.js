import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./userIcon.png";
import "./Assignment.css";

// const Title = () => <h1 className="head">Namaste React !!!</h1>;

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">This is functional component in jSX</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
