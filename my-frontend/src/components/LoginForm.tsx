import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { loginUser } from '../api/api';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // Handle error state
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await loginUser({ email, password });
      localStorage.setItem('token', token);
      console.log('Login successful');

      // Redirect to the dashboard or home page after successful login
      navigate('/dashboard'); // Update the path as per your routing structure
    } catch (error) {
      console.error('Login failed');
      setError('Invalid email or password'); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
