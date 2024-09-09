import Navbar from "./components/navbar";
import Home from "./pages/home";
import ProductPage from "./pages/products";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details";
import ErrorPage from "./pages/ErrorPage";
import UserAuth from "./pages/userAuth";
import LogIn from "./pages/login";
import SignUp from "./pages/signUp";

// User-Auth -> Nested Routing
//Index-Route -> A route which has default path like / and by default its value is true, it's a boolean value, It's route exactly like its parent Route, One Index Route for one Parent, rnder when parent URL satisfies

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="product-details/:id?" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="user-auth">
          <Route
            index={true}
            element={
              <>
                <LogIn />
              </>
            }
          />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
