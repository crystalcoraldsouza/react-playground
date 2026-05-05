import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor called", this.props.name);
    this.state = { count: 0, count2: 1, userInfo: {} };
  }

  async componentDidMount() {
    console.log("Child componentDidMount called", this.props.name);
    // https://api.github.com/users/crystalcoraldsouza
    const data = await fetch("https://api.github.com/users/crystalcoraldsouza");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate called", this.props.name);
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount called", this.props.name);
  }

  render() {
    // const { name, email, phone } = this.props;
    const { count, count2 } = this.state;
    const { name, location, bio, avatar_url } = this.state?.userInfo;
    // console.log("Child Render called", name);

    return (
      <div className="p-8 border border-gray-300 rounded-md">
        <p>Count: {count} </p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment Count
        </button>
        {/* <p>Count2: {count2} </p>
        <button onClick={() => this.setState({ count2: count2 + 1 })}>
          Increment Count2
        </button> */}
        {/* <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p> */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <img src={avatar_url} alt={name} width={200} />
          <div>
            {" "}
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
