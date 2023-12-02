// ProjectSubmission.js
import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import CustomNavbar from '../components/navbar';
const ProjectSubmission = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [email, setEmail] = useState('');
  const [submittedProjects, setSubmittedProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you want to display the submitted data
    const projectData = {
      projectTitle,
      projectDescription,
      email,
    };

    // Add logic to post the data to your backend
    // You can use axios or fetch for making API calls
    // Once the data is submitted, update the submittedProjects array
    setSubmittedProjects([...submittedProjects, projectData]);

    // Clear form fields after submitting
    setProjectTitle('');
    setProjectDescription('');
    setEmail('');
  };

  return (
    <div><CustomNavbar />
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2>Submit Project</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="projectDescription">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Project
            </Button>
          </Form>

          {submittedProjects.map((project, index) => (
            <Alert key={index} variant="white" className="mt-3">
              <h5>Submitted Project:</h5>
              <p><strong>Project Title:</strong> {project.projectTitle}</p>
              <p><strong>Project Description:</strong> {project.projectDescription}</p>
              <p><strong>Email ID:</strong> {project.email}</p>
            </Alert>
          ))}
        </Card.Body>
      </Card>
    </Container></div>
  );
};

export default ProjectSubmission;
