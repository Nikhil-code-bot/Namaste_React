import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummay location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nikhil-code-bot");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, company } = this.state.userInfo;
    return (
      <div className="user-class">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Company: {company}</h3>
        <h4>Contact: 8898704757</h4>
      </div>
    );
  }
}

export default User;
