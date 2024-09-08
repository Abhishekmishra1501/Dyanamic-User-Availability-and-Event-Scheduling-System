import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if form is submitting
    console.log('Form submitted with:', { email, password, role });

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        email,
        password,
        role,
      });
      
      console.log('Signup successful:', response.data); // Debugging output
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error); // Debugging output
      alert('Signup failed, please try again.');
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
        
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
