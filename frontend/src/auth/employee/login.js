import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import { useUser } from '../../UserContext';

const EmployeeLogin = () => {
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
      const response = await axios.post('http://localhost:3001/api2/login', {
        email: formData.email,
        password: formData.password,
      });
  
      if (response && response.data && response.data.employee && response.data.employee.role === 'employee') {
        const { _id, name, email,role } = response.data.employee;
  
        setUserId(_id);
        setName(name);
        setEmail(email);
        setRole(role)
  
        console.log(name);
        console.log(email);
        console.log("Employee Logged in");

        navigate('/home');
      } else {
        console.error('Login unsuccessful. Response:', response);
        // Handle cases where the response or expected data is missing
        // For example, display an error message or handle the scenario accordingly
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, display error message, etc.
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container p-4 rounded shadow-lg bg-white" style={{ maxWidth: '400px' }}>
        <h1 className="mb-4 text-center">Employee Login</h1>
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
          <div>Dont have account?<Link to="/employeesignup" className='ms-2'>Register here</Link></div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
