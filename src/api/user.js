import axios from 'axios';

const API_URL = 'https://awp-ia-03-registration-be.vercel.app';

// Function to handle user registration
export async function registerUser(username, email, password) {
  try {
    const response = await axios.post(`${API_URL}/users/register`, {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to register user. Please try again');
  }
}

// Function to handle user login
export async function loginUser(username, password) {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to login user. Please try again');
  }
}
