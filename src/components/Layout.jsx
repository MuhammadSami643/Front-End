import Footer from "./Footer";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
