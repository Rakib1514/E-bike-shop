import React from 'react';
import Banner from './Banner';
import StateHome from './state-for-home/StateHome';

const Home: React.FC = () => {
  return (
    <>
      <Banner/>
      <StateHome/>
    </>
  );
};

export default Home;