import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// global configuration
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

// interceptor for requests
axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  err => {
    console.error(err);
    return Promise.reject(err);
  }
);

// interceptor for responses
axios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  err => {
    console.error(err);
    return Promise.reject(err);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
