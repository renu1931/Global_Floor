import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

export default App;
