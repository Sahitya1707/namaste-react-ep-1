import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      About
      <h1>This is namaste React Webseries</h1>
      <User />
      <UserClass name={"Sahitya Class"} location={"Nepal"} />
    </div>
  );
};

export default About;
