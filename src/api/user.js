const API_URL = 'http://localhost:3000';

// Function to handle user registration
export async function registerUser(username, email, password) {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error(
      'Failed to register user. Username or email already exists'
    );
  }

  return response.json();
}

// Function to handle user login
export async function loginUser(username, password) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to login user. Invalid username or password');
  }

  return response.json();
}
