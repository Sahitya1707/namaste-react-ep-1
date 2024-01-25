import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child Component did mount called");
  }

  render() {
    console.log("Child render");
    const { name, location } = this.props;
    console.log(this.state);
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <p>Count:{count}</p>

        <h3>Location: {location}</h3>
        <h4>Contact: neupanesahitya1@gmail.com</h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            // we shouldn't be updating variable directly.

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Your Count
        </button>
      </div>
    );
  }
}

export default UserClass;
