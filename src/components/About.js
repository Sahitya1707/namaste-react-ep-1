import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        About
        <h1>This is namaste React Webseries</h1>
        <p>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
            {/* {data.loggedInUser} */}
          </UserContext.Consumer>
        </p>
        {/* <User /> */}
        <UserClass name={"Sahitya Class"} location={"Nepal"} />
      </div>
    );
  }
}

export default About;
