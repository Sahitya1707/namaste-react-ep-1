import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        About
        <h1>This is namaste React Webseries</h1>
        {/* <User /> */}
        <UserClass name={"Sahitya Class"} location={"Nepal"} />
        <UserClass name={"Elon Musk"} location={"Users"} />
      </div>
    );
  }
}

export default About;
