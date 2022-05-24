import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store.js";

ReactDOM.render(
  <Provider store={store}> {/* store envuelve todo lo que esta en store.js ---->  relacionado con redux ---> store global donde estan todos los estados   */}
    <Router> {/* todo lo que genera el enrutado  */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);


