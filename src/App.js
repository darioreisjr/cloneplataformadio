import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;













