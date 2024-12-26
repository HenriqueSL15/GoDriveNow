import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import InformationForm from "./components/InformationForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route
          exact
          path="/information-form"
          element={<InformationForm />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
