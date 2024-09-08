import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this is correct
});

// Fetch availabilities
export const fetchAvailabilities = async () => {
  try {
    const response = await api.get('/availability');
    return response.data;
  } catch (error) {
    console.error('Error fetching availabilities:', error);
    throw error;
  }
};

// Fetch sessions
export const fetchSessions = async () => {
  try {
    const response = await api.get('/session');
    return response.data;
  } catch (error) {
    console.error('Error fetching sessions:', error);
    throw error;
  }
};

// User signup
export const signupUser = async (data: { email: string; password: string; role: string }) => {
  try {
    const response = await api.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// User login
export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/login', data);
    return response.data.token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Submit availability
export const submitAvailability = async (data: { email: string; start: string; end: string }) => {
  try {
    const response = await api.post('/availability', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token if required
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting availability:', error);
    throw error;
  }
};

