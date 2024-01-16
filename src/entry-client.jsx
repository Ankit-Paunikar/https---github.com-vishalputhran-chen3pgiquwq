// import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import Caseboard from "./pages/Caseboard/index";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Caseboard />
  </React.StrictMode>
);
