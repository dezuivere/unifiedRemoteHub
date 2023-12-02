// Home.js
import React from 'react';
import Navbar from '../components/navbar';
import './styles/Home.css';
import "./Wellbeing/WellBeing"

const Home = () => {
  const backgroundStyles = {
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '90vh', // Set the height of the container to the full viewport height
  };

  return (
    <div style={{overflowX:'hidden'}}>
      <div>
        <Navbar />
      </div>
      <div style={backgroundStyles}>
        <div className="text-container">
          <h1 >Distance is no obstacle when minds unite in the digital space. 
            Remote work is not a compromise; it's a celebration of our ability to connect beyond borders</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>Want to build your own team?</p>
              <a href="/workspace">
                <button className="btn btn-primary">Go to workspace</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>Have tasks to perform?</p>
              <a href="/todo">
                <button className="btn btn-primary">Add to-do List</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-text'>Stressed out too quickly?</p>
              <a href="/wellbeing">
                <button className="btn btn-primary">Let's Relax</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      </div>
    </div>
  );
}

export default Home;