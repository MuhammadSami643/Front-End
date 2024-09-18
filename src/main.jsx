import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalVar } from "./contexts/userAuthContext.jsx";
import { Provider } from "react-redux";
import reduxStore from "./redux/store.js";

//BrowserRouter-> Used to enable routing, wrap whole application into BrowserRouter Tag

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      {/* <GlobalVar> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </GlobalVar> */}
    </Provider>
  </StrictMode>,
);
