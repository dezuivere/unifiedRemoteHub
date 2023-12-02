// controllers/adminController.js

const Admin = require('../modal/Admin.js'); // Replace with your Admin model
const Company=require('../modal/Company.js')
const bcrypt = require('bcryptjs');

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCompanyById = async (req, res) => {
  const companyId = req.params.id; // Assuming the company ID is passed as a parameter

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteCompanyById = async (req, res) => {
  const companyId = req.params.id; // Assuming the company ID is passed as a parameter

  try {
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    await Company.findByIdAndDelete(companyId);

    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new company
exports.createCompany = async (req, res) => {
  const { name, description } = req.body;

  const company = new Company({
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


exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // If admin doesn't exist
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful', admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin with the same email exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter

  try {
    // Fetch user data from the database based on the ID
    const user = await Admin.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user profile data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
