import React, { useState } from "react";

const SerachUser = ({users,setUsers}) => {
   
  
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
   

  const handleSearchUser = () => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <div className="app">
       
 
        <div className="search-user-tab">
          <h2>Search User</h2>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search by Name"
          />
          <button onClick={handleSearchUser}>Search</button>
          {searchResults.length > 0 ? (
            <div className="search-results">
              <h3>Search Results:</h3>
              <ul>
                {searchResults.map((user, index) => (
                  <li key={index}>
                    {user.name}, {user.age}, {user.email}, {user.address}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="no-results">No results found.</div>
          )}
        </div>
      
    </div>
  );
};

export default SerachUser;
