import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps !!!</h1>
      <h1>Something Went Wrong</h1>
      <h2>{err.data}</h2>
      <h3>{err.status}</h3>
    </div>
  );
};
export default Error;
