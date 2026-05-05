import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h2>User Profile</h2>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count2: {count2} </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default User;
