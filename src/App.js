import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Login from "./Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="app">
      {/* <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router> */}
      <HomeScreen />
    </div>
  );
}

export default App;
