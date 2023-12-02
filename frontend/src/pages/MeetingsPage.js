// MeetingPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import CustomNavbar from '../components/navbar';
const MeetingPage = () => {
  const [meetingDescription, setMeetingDescription] = useState('');
  const [meetingTiming, setMeetingTiming] = useState('');
  const [email, setEmail] = useState('');
  const [submittedMeetings, setSubmittedMeetings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you want to display the submitted data
    const meetingData = {
      meetingDescription,
      meetingTiming,
      email,
    };

    // Add logic to post the data to your backend
    // You can use axios or fetch for making API calls
    // Once the data is submitted, update the submittedMeetings array
    setSubmittedMeetings([...submittedMeetings, meetingData]);

    // Clear form fields after submitting
    setMeetingDescription('');
    setMeetingTiming('');
    setEmail('');
  };

  return (
    <div><CustomNavbar />
    <Container className="mt-5">
      
      <Card>
        <Card.Body>
          <h2>Schedule Meeting</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="meetingDescription">
              <Form.Label>Meeting Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={meetingDescription}
                onChange={(e) => setMeetingDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="meetingTiming">
              <Form.Label>Meeting Timing</Form.Label>
              <Form.Control
                type="text"
                value={meetingTiming}
                onChange={(e) => setMeetingTiming(e.target.value)}
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
              Schedule Meeting
            </Button>
          </Form>

          {submittedMeetings.map((meeting, index) => (
            <Alert key={index} variant="white" className="mt-3">
              <h5>Submitted Meeting:</h5>
              <p><strong>Meeting Description:</strong> {meeting.meetingDescription}</p>
              <p><strong>Meeting Timing:</strong> {meeting.meetingTiming}</p>
              <p><strong>Email ID:</strong> {meeting.email}</p>
            </Alert>
          ))}
        </Card.Body>
      </Card>
    </Container></div>
  );
};

export default MeetingPage;
