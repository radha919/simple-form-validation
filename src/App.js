import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'addUser',
      users: [],
      newUser: {
        name: '',
        age: '',
        email: '',
        address: '',
      },
      searchName: '',
      searchResults: [],
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        [name]: value,
      },
    }));
  };

  handleSearchInputChange = (event) => {
    this.setState({ searchName: event.target.value });
  };

  handleAddUser = () => {
    const { name, age, email, address } = this.state.newUser;
    if (name && age && email) {
      const newUser = {
        name,
        age,
        email,
        address,
      };
      this.setState((prevState) => ({
        users: [...prevState.users, newUser],
        newUser: {
          name: '',
          age: '',
          email: '',
          address: '',
        },
      }));
    }
  };

  handleSearchUser = () => {
    const { searchName, users } = this.state;
    const searchResults = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    this.setState({ searchResults });
  };

  render() {
    const { activeTab, newUser, searchResults } = this.state;

    return (
      <div className="app">
        <div className="tabs">
          <button
            onClick={() => this.handleTabChange('addUser')}
            className={activeTab === 'addUser' ? 'active' : ''}
          >
            Add User
          </button>
          <button
            onClick={() => this.handleTabChange('searchUser')}
            className={activeTab === 'searchUser' ? 'active' : ''}
          >
            Search User
          </button>
        </div>

        {activeTab === 'addUser' && (
          <div className="add-user-tab">
            <h2>Add User</h2>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={this.handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="age"
              value={newUser.age}
              onChange={this.handleInputChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="email"
              value={newUser.email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
            <textarea
              name="address"
              value={newUser.address}
              onChange={this.handleInputChange}
              placeholder="Address"
            />
            <button onClick={this.handleAddUser}>Add User</button>
          </div>
        )}

        {activeTab === 'searchUser' && (
          <div className="search-user-tab">
            <h2>Search User</h2>
            <input
              type="text"
              value={this.state.searchName}
              onChange={this.handleSearchInputChange}
              placeholder="Search by Name"
            />
            <button onClick={this.handleSearchUser}>Search</button>
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
        )}
      </div>
    );
  }
}

export default App;

 
