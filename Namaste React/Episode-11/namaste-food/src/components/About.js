// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="my-10 mx-0 flex-1">
        <h1>About Us Page</h1>
        {/* <User name="John Doe" email="john.doe@abc.com" phone="123-456-7890" /> */}
        <div>
          Logged in as:{" "}
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
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
