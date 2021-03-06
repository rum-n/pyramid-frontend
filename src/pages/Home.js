import React from 'react';
import './styles.css';
import HomeNav from '../components/nav/HomeNav';
import Location from '../components/selectLocation/SelectLocation';

const Home = () => {
  
  return (
      <React.Fragment>
        <HomeNav/>
        <div className='main'>
        <Location/>
        </div>
      </React.Fragment>
  );
}

export default Home;