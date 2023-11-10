import React, { useState } from "react";

const SerachUser = ({ users, setUsers }) => {
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchUser = () => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <div className="app1">
      <div className="search-user-tab">
        <h2>Search User</h2>
        <label>
          Search by name
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            
            placeholder="Search by Name"
          />
        </label>

        <div className="btn">
          <button className="btn-1" onClick={handleSearchUser}>
            Search
          </button>
        </div>

        {searchResults.length >0 ? (
          <div className="search-results">
            
            <ul>
              {searchResults.map((user, index) => (
                <li key={index}>
                  {user.name}, {user.age}, {user.email}, {user.address}
                </li>
              ))}
            </ul>
          </div>
        ) : 
        (
          <div className="no-results">No results found.</div>
        )}
      </div>
    </div>
  );
};

export default SerachUser;
