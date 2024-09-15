import Home from "./pages/home";
import ProductPage from "./pages/products";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/product-details";
import ErrorPage from "./pages/ErrorPage";
import LogIn from "./pages/login";
import SignUp from "./pages/signUp";
import PrivateRoute from "./components/Private-Route";
import Layout from "./components/Layout";
import "../index.css";
import AddToCart from "./pages/addToCart";

// User-Auth -> Nested Routing
//Index-Route -> A route which has default path like / and by default its value is true, it's a boolean value, It's route exactly like its parent Route, One Index Route for one Parent, rnder when parent URL satisfies

const App = () => {
  return (
    <>
      {/* <Home /> */}

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="products"
          element={
            <PrivateRoute>
              <Layout>
                <ProductPage />
              </Layout>
            </PrivateRoute>
          }
        />
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
        <Route path="signup" element={<SignUp />} />
        <Route path="add-to-cart" element={<AddToCart />} />
      </Routes>
    </>
  );
};
export default App;
