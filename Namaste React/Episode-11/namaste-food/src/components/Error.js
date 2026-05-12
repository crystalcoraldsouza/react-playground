import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Oops something went wrong.</h1>
      <h2>{error.status + " : " + error.statusText}</h2>
    </div>
  );
};

export default Error;
