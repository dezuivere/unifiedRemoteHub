import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import CustomNavbar from '../components/navbar';

const images = [
  'https://th.bing.com/th/id/OIP.8-JlDOaIdCvPDc1zM_FMUAHaE8?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.7MfZxyG33NLjiZ1-9vL3kAHaHW?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oiS7qp_gJogcgg4t4lj1BQHaFk?w=1200&h=902&rs=1&pid=ImgDetMain',
  // Add more image URLs as needed
];

const WorkInProgressPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [randomImage, setRandomImage] = useState('');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);

    if (status === 'Ongoing') {
      // Display a random image for the "Ongoing" status
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }
  };

  const handleNeedHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleContactClose = () => {
    setShowHelpModal(false);
  };

  return (
    <div className='vh-100'>
      <CustomNavbar />

      <Container className="mt-5">
        <h2>Work In Progress</h2>

        <div className="mt-3">
          <Button variant="primary" className="mr-2" onClick={() => handleStatusClick('Ongoing')}>
            Ongoing
          </Button>
          <Button variant="warning" className="mr-2" onClick={() => handleStatusClick('Pending')}>
            Pending
          </Button>
          <Button variant="success" className="mr-2" onClick={() => handleStatusClick('Completed')}>
            Completed
          </Button>
          <Button variant="danger" onClick={handleNeedHelpClick}>
            Need Help
          </Button>
        </div>

        {selectedStatus && (
          <div className="mt-3">
            <h4>Selected Status: {selectedStatus}</h4>

            {selectedStatus === 'Ongoing' && randomImage && (
              <div className='row'>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='card-text'>Voltix Solution</p>
                      <p>We are not afraid to say no to projects that we cannot do well. We would 
                        rather focus on a few projects and do them right than take on too much and sacrifice quality.Our team of talented and highly committed professionals is
                        the key to our success in creating business solutions</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='card-text'>Sahyadri Virtual campus</p>
                      <p>Sahyadri College of Engineering and Management (SCEM), Mangaluru, an Autonomous Institute 
                        affiliated to the Visvesvaraya Technological University (VTU), Belagavi, was established in the year 2007
                        under the Bhandary Foundation.</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='card-text'>Novigo Solution</p>
                      <p>Google LLC is an American multinational technology company focusing on artificial intelligence, 
                        online advertising, search engine technology, cloud computing, computer software, quantum computing, 
                        e-commerce, and consumer electronics.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Need Help Modal */}
        <Modal show={showHelpModal} onHide={handleContactClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact for Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>If you need assistance, please contact support at support@example.com.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleContactClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>


       <div className="bg">
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      </div>
    </div>
  );
};

export default WorkInProgressPage;
