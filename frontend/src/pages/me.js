
const Workspace = () => {
    const navigate = useNavigate();
  
    // ... (existing code)
  
    const handleJoinWorkspace = (company) => {
      // ... (existing code)
  
      emailjs
        .send('service_bgfbjhi', 'template_iwjqiyn', emailJSParams)
        .then((response) => {
          // ... (existing code)
  
          axios.post('http://localhost:3001/api2/storeEmailDetails', {
            company: company.name,
            userName: name,
            userEmail: email,
            userId,
          })
          .then((dbResponse) => {
            console.log('Data stored in database:', dbResponse.data);
            // Update the acceptedRequests state or perform necessary actions here
              
            // Navigate to the Work component
            navigate('/work');
          })
          .catch((error) => {
            console.error('Error storing data in the database:', error);
          });
        })
        .catch((error) => {
          console.error('Email error:', error);
          alert('Error sending email. Please try again.');
        });
    };
  
    // ... (existing code)
  };
  