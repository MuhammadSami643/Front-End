import { Outlet } from "react-router-dom";

// OUTLET-> If we didn't use this than no matter what we write only one page render not inside's pages

const UserAuth = () => {
  return (
    <>
      <h1>User Auth</h1>
      <Outlet />
    </>
  );
};

export default UserAuth;
