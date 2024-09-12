import { createContext, useState } from "react";

const userAuthContext = createContext();

const GlobalVar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(10);

  return (
    <>
      <userAuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {props.children}
      </userAuthContext.Provider>
    </>
  );
};

export { GlobalVar, userAuthContext };
