import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/user-auth/login">Login</NavLink>
    </>
  );
};

export default Navbar;
