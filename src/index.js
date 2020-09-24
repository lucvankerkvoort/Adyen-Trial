import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { StateProvider } from "./app/storage";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
  <StateProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StateProvider>,
  // @ts-ignore
  document.getElementById("root")
);
