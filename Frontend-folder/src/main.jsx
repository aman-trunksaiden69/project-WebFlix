import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom"; // BrowserRouter ki jagah HashRouter use kiya
import { Provider } from "react-redux";
import { store } from "./Store/Store.jsx";
import UserContext from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContext>
      <HashRouter>
        <App />
      </HashRouter>
    </UserContext>
  </Provider>
);
