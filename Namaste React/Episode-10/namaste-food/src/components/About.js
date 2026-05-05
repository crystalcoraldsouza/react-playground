// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount called");
  }

  render() {
    // console.log("Parent Render called");
    return (
      <div className="my-10 mx-0 flex-1">
        <h1>About Us Page</h1>
        {/* <User name="John Doe" email="john.doe@abc.com" phone="123-456-7890" /> */}
        <UserClass
          name="John Doe"
          email="john.doe@abc.com"
          phone="123-456-7890"
        />
        <UserClass
          name="Jane Doe"
          email="jane.doe@abc.com"
          phone="123-456-7890"
        />
      </div>
    );
  }
}

export default About;
