// controllers/adminController.js

const Employee = require('../modal/Employee.js'); // Replace with your Admin model
const Data=require('../modal/DataDetails.js')
const bcrypt = require('bcryptjs');

exports.employeeLogin = async (req, res) => {
  try {
    const {userId, email, password } = req.body;
    
    // Find the admin by email
    const employee = await Employee.findOne({ email });

    // If admin doesn't exist
    if (!employee) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, employee.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful', employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createemployee = async (req, res) => {
  try {
    const {name, email, password } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newEmployee = new Employee({name, email, password: hashedPassword });
    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter
  
    try {
      // Fetch user data from the database based on the ID
      const user = await Employee.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user profile data
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

  exports.getAllCompanies = async (req, res) => {
    try {
      const companies = await Admin.find();
      res.json(companies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Create a new company
  exports.createCompany = async (req, res) => {
    const { name, description } = req.body;
  
    const company = new Admin({
      name,
      description,
    });
  
    try {
      const newCompany = await company.save();
      res.status(201).json(newCompany);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

  // POST request to store email details in the database
exports.storeEmailDetails = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { company, userName, userEmail, userId /* Add other necessary data */ } = req.body;

    // Create a new Email instance or use your database model to store the data
    const newEmail = new Data({
      company,
      userName,
      userEmail,
      userId,
      // ...other relevant data
    });

    // Save the email details to the database
    const savedEmail = await newEmail.save();

    // Respond with the saved email data or a success message
    res.status(201).json(savedEmail);
  } catch (error) {
    console.error('Error storing email details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const companies = await Data.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCompanyById = async (req, res) => {
  const companyId = req.params.id; // Assuming the company ID is passed as a parameter

  try {
    const company = await Data.findById(companyId);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    await Data.findByIdAndDelete(companyId);

    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
