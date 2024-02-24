import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Child Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }
  async componentDidMount() {
    // console.log("Child Component did mount called");\

    //Api Call
    const data = await fetch("https://api.github.com/users/sahitya1707");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    // console.log(this.props.name + "Child render");
    // const { name, location } = this.props;
    const { name, type, avatar_url } = this.state.userInfo;

    // const {}
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>

        <h3>Location: {type}</h3>
        <img src={`${avatar_url}`} alt="" />
        <h4>Contact: neupanesahitya1@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
