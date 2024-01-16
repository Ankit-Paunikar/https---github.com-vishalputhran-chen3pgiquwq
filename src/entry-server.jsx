import React from "react";
import ReactDOMServer from "react-dom/server";
// import App from "./App";

import Caseboard from "./pages/Caseboard/index";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Caseboard />
    </React.StrictMode>
  );
  return { html };
}
