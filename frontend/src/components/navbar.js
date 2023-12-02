import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { useUser } from '../UserContext';
const CustomNavbar = () => {
  const Navigate = useNavigate()
  const { userId,role } = useUser(); 
  const [firstLetter, setFirstLetter] = useState('');
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          let response;
          if (role === 'admin') {
            response = await axios.get(`http://localhost:3001/api/profile/${userId}`);
          } else {
            response = await axios.get(`http://localhost:3001/api2/profile/${userId}`);
          }
  
          console.log('Response data:', response.data); // Log the response data
  
          if (response.data) {
            const userData = response.data;
            const username = userData.email;
            // const userRole = userData.role;
  
            if (username ) {
              setFirstLetter(username.charAt(0).toUpperCase());
              // setRole(userRole || false);
            } else {
              console.error('Username or role not found in response data.');
            }
          } else {
            console.error('No data received from the server.');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [userId, role]);
  
  const userProfileClick = () => {
    Navigate('/profile')
  };

  return (
    <>
      <style>
        {`
          .active {
            font-size: 1.1em;
            font-weight: bold;
            color: #333;
            padding-bottom: 2px;
            margin-bottom: -2px;
          }
          .avatar {
            width: 36px;
            height: 36px;
            background-color: #28a745; 
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: white;
            cursor: pointer;
          }
          .navbar {
            padding: 15px 20px; /* Adjust navbar padding */
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add box-shadow */
          }
          .navbar-brand {
            font-weight: bold;
          }
          .nav-link {
            font-weight: 500;
            color: #333;
            margin-right: 15px; /* Adjust space between nav links */
          }
        `}
      </style>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
        <Navbar.Brand>Sync </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact to="/home" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/wellbeing" activeClassName="active">
              Well-being
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/workspace" activeClassName="active">
              Workspace
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/todo" activeClassName="active">
              Todo
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/About" activeClassName="active">
              About us
            </Nav.Link>
            {role=='admin' && ( // Render the "Database" link only if the user is an admin
            <Nav.Link as={NavLink} exact to="/database" activeClassName="active">
              Database
            </Nav.Link>
          )}
          </Nav>
          <Nav className='ms-auto'>
            <div className="avatar" onClick={userProfileClick}>
              {firstLetter}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
