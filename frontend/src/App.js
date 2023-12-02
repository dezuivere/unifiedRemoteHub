import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './auth/login';
import AdminLogin from './auth/admin/login';
import EmployeeLogin from './auth/employee/login';
import EmployeeSignup from './auth/employee/signup';
import Navbar from './components/navbar';
import Landingpage from './pages/landingpage';
import Profile from './profile/profile';
import Home from './pages/Home';
import Workspace from './pages/Workspace';
import WellBeing from './pages/Wellbeing/WellBeing';
import Page from './pages/view/page';
import TodoList from './pages/Todo/TodoList'
import Footer from './components/footer';
import Database from './pages/database';
import { UserProvider } from './UserContext';
import AnnouncementPage from "./pages/WorkspaceSection"
import ProjectsPage from './pages/ProjectsPage';
import OngoingPage from './pages/OngoingTasksPage';
import MeetingsPage from './pages/MeetingsPage';
import About from './components/aboutUs'
function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
          <Route path="/employeesignup" element={<EmployeeSignup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wellbeing" element={<WellBeing />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path='/page' element={<Page/>}/>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/database" element={<Database />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/workspace/*" element={<Page />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ongoing" element={<OngoingPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/About" element={<About />} />
        </Routes>
      </UserProvider>
      <Footer />
    </Router>
    
  );
}

export default App;
