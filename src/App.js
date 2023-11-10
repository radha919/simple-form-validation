import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import SerachUser from "./SerachUser";
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div className="tabs-container">
        <div className="tab-links">
          <Link to="/adduser">Add User</Link>
          <Link to="/searchuser">Search User</Link>
        </div>
      </div>

      <div className="tab-content">
        <Routes>
          <Route
            path="/adduser"
            element={<AddUser users={users} setUsers={setUsers} />}
          />
          <Route
            path="/searchuser"
            element={<SerachUser users={users} setUsers={setUsers} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
