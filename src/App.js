import React, { useState } from 'react';
import UserList from './components/UserList.js'; 
import UserForm from './components/UserForm.js'; 
import { addUser, editUser } from './services/api.js'; 
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Leanne", lastName: "Graham", email: "Sincere@april.biz", department: "IT" },
    { id: 2, firstName: "Ervin", lastName: "Howell", email: "Shanna@melissa.tv", department: "CSE" },
    { id: 3, firstName: "Clementine", lastName: "Bauch", email: "Nathan@yesenia.net", department: "No Department" },
    { id: 4, firstName: "Pierson", lastName: "Rivera", email: "piersonR@nest.com", department: "ECE" },
    { id: 5, firstName: "Ben", lastName: "Azelart", email: "benAzelerat@yahoo.com", department: "CCE" }

  ]);

  // State for Editing User
  const [editingUser, setEditingUser] = useState(null);

  // State for Add User Form
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", department: "" });
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Handle Edit Click
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Handle Add New User Modal Open
  const handleOpenAddUserModal = () => {
    setShowAddUserModal(true);
  };

  // Handle Add New User Save
  const handleSaveNewUser = () => {
    if (!newUser.firstName || !newUser.lastName || !newUser.email) {
      alert("Please fill in all fields.");
      return;
    }

    const newUserData = {
      id: users.length + 1,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      department: newUser.department || "No Department",
    };

    setUsers([...users, newUserData]);
    setNewUser({ firstName: "", lastName: "", email: "", department: "" }); // Reset fields
    setShowAddUserModal(false);
  };

  return (
    <div className="App">
      <h1>User Management Application</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td className="actions">
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handleOpenAddUserModal} className="add-user">Add User</button>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="modal">
          <h2>Add New User</h2>
          <input
            type="text"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department (Optional)"
            value={newUser.department}
            onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
          />
          <button onClick={handleSaveNewUser}>Save</button>
          <button onClick={() => setShowAddUserModal(false)}>Cancel</button>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="modal">
          <h2>Edit User</h2>
          <input
            type="text"
            value={editingUser.firstName}
            onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
          />
          <input
            type="text"
            value={editingUser.lastName}
            onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
          />
          <input
            type="email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          />
           <input
              type="text"
              placeholder="Department"
              value={editingUser.department}
              onChange={(e) => setEditingUser({ ...editingUser, department: e.target.value })}
          />
          <button onClick={() => {
            setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
            setEditingUser(null);
          }}>Save</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default App;