import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import axios from 'axios';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { setUserId,setName, setEmail,setRole } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email: formData.email,
        password: formData.password,
      });
      if (response && response.data && response.data.admin && response.data.admin.role === 'admin') {
        const {_id, name, email,role } = response.data.admin;
  
        setUserId(_id);
        setName(name);
        setEmail(email);
        setRole(role)
  
        console.log(name);
        console.log(email);
        console.log("Role is",role);
        // Admin login successful
        console.log('Admin logged in.');
         console.log('Login successful:', response.data);
      navigate('/home');
        // Redirect or perform actions specific to admin
      } else {
        // Invalid user or not an admin
        console.error('Invalid user or not an admin.');
        // Handle invalid login or role
      }

      // Redirect or perform actions upon successful login
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container p-4 rounded shadow-lg bg-white" style={{ maxWidth: '400px' }}>
        <h1 className="mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
