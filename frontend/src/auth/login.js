
import React from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const handleLogin = (userType) => {
    // Perform actions based on user type (employee or admin)
    console.log(`Logging in as ${userType}`);
    if (userType === 'Employee') {
      navigate('/employeelogin'); // Replace '/employee-login' with your employee login route
    } else if (userType === 'Admin') {
      navigate('/adminlogin'); // Replace '/admin-login' with your admin login route
    }
    // You can redirect to respective login pages or perform login actions
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(211, 211, 211)'}}>
      <div className="card p-5">
        <h1 className="text-center mb-4">Login</h1>
        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-lg mb-3" onClick={() => handleLogin('Employee')}>
            Login as Employee
          </button>
          <button className="btn btn-primary btn-lg" onClick={() => handleLogin('Admin')}>
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
