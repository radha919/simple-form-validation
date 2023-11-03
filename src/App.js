import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import SerachUser from "./SerachUser";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="tabs-container">
        <div className="tab-links">
          <Link to="/adduser">add user</Link>
          <Link to="/searchuser">search user</Link>
        </div>
      </div>

      <div className="tab-content">
        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/searchuser" element={<SerachUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
