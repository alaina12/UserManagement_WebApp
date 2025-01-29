import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};

// Add a new user
export const addUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    console.log('Added user:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding user", error);
    throw error;
  }
};

// Edit a user
export const editUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
    console.log('Updated user:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error editing user", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/${userId}`);
    console.log('Deleted user:', response.data); 
    return response.data;
  } catch (error) {
    console.error("Error deleting user", error);
    throw error;
  }
};
