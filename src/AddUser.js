import React, { useState } from "react";

const AddUser = ({ users, setUsers }) => {
  

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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully");
  };

  localStorage.setItem("users", JSON.stringify(users))

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="app">
        <div className="add-user-tab">
          <h2>Add User</h2>
          <label>
            Enter your Name
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </label>

          <label>
            Enter your Age
            <input
              type="number"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
          </label>

          <label>
            Enter your Email
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </label>

          <label>
            Enter your Address
            <textarea
              name="address"
              value={newUser.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
          </label>

          <div className="btn">
            <button onClick={handleAddUser}>Add User</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
