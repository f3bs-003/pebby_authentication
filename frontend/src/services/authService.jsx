import api from '../api/Api';

// Register a new user
export const register = async (fullname, username, password) => {
  const response = await api.post('/users/register', { fullname, username, password });
  return response.data;
};

// Login a user
export const login = async (username, password) => {
  const response = await api.post('/users/login', { username, password });
  localStorage.setItem('authToken', response.data.token);
  return response.data;
};
