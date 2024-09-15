import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-0">
        <div className="text-2xl font-bold">
          <p className="m-0 p-0">Saym Store</p>
        </div>

        <ul className="m-0 flex list-none space-x-8 p-0">
          <li>
            <NavLink
              to="/"
              className="text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-auth/login"
              className="text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
            >
              Signup
            </NavLink>
            <NavLink
              to="/add-to-cart"
              className="text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
            >
              <img src="public/5163709.png" alt="Logo" className="h-8" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
