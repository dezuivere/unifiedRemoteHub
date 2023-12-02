
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee.js');
const multer = require('multer');
const upload = multer({ dest: '../modal/uploads.js' });

router.post('/login', EmployeeController.employeeLogin);
router.get('/profile/:id', EmployeeController.getUserProfile);
router.post('/create', EmployeeController.createemployee);
router.post('/createcompany',EmployeeController.createCompany)
router.get('/getcompany',EmployeeController.getAllCompanies)
router.post('/storeEmailDetails', EmployeeController.storeEmailDetails);
router.get('/getDetails', EmployeeController.getAllData);
router.delete('/deletecompany/:id', EmployeeController.deleteCompanyById);
router.post('/submitProject', upload.single('file'), (req, res) => {
    // Access form data in req.body
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    
    // Access uploaded file in req.file
    const uploadedFile = req.file;
  
    // Process and save the project data and file as needed
    // ...
  
    // Send a response
    res.json({ message: 'Project submitted successfully' });
  });
  router.get('/getMeetings', (req, res) => {
    // Fetch meetings data from your database or other source
    const meetings = [
      { id: 1, title: 'Team Standup', time: '10:00 AM', details: 'Discussing daily tasks' },
      { id: 2, title: 'Project Review', time: '2:00 PM', details: 'Reviewing project progress' },
      // Add more meetings as needed
    ];
  
    // Send the meetings data as a JSON response
    res.json(meetings);
  });
  router.get('/getOngoingTasks', (req, res) => {
    // Fetch ongoing tasks data from your database or other source
    const ongoingTasks = [
      { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'In Progress' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
      // Add more ongoing tasks as needed
    ];
  
    // Send the ongoing tasks data as a JSON response
    res.json(ongoingTasks);
  });

module.exports = router;
