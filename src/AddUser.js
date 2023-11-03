import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
//   const [activeTab, setActiveTab] = useState("addUser");

  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.age && newUser.email) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", age: "", email: "", address: "" });
    }
  };
  return (
    <div className="app">
      <div className="add-user-tab">
        <h2>Add User</h2>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={newUser.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <textarea
          name="address"
          value={newUser.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
