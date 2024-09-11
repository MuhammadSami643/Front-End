import { Navigate } from "react-router-dom";

// Its like MiddleWare, its Protected/Private Route
const PrivateRoute = (props) => {
  const isUserLoggedIn = true;
  return (
    <>
      {isUserLoggedIn ? props.children : <Navigate to={"/user-auth/login"} />}
    </>
  );
};

export default PrivateRoute;
