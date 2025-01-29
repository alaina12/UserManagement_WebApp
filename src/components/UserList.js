import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api.js'; 
import UserItem from './UserItem.js';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log("Fetched Users:", data);
        setUsers(data);
      } catch (err) {
        setError('Error fetching users');
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError('Error deleting user');
    }
  };
  const handleAddUser = async (userData) => {
  try {
    const newUser = await addUser(userData);
    setUsers([...users, newUser]);  // Add the new user to the state
  } catch (err) {
    console.error('Error adding user:', err);
    alert('Failed to add user.');
  }
};

const handleSaveUser = async (userData) => {
  if (selectedUser && selectedUser.id) {
    // Edit user
    try {
      const updatedUser = await editUser(selectedUser.id, userData);
      setUsers(users.map(user => user.id === selectedUser.id ? updatedUser : user));  // Update edited user
    } catch (err) {
      console.error('Error editing user:', err);
      alert('Failed to update user.');
    }
  } else {
    // Add user
    handleAddUser(userData);
  }
  setSelectedUser(null);
};


  return (
    <div>
      <h2>User List</h2>
      {error && <p>{error}</p>}
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
            <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
