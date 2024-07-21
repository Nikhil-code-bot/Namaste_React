import React from "react";
import User from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is class based component</h1>
        <h2>Welcome to Namaste React</h2>
        <User name={"Nikhil Shinde"} location={"Navi Mumabi"} />;
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>This is class based component</h1>
//       <h2>Welcome to Namaste React</h2>
//       <User name={"Nikhil Shinde"} location={"Navi Mumabi"} />;
//     </div>
//   );
// };

export default About;
