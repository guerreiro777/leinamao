import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cards from '../components/sections/Cards';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" style={{backgroundColor: "#fff"}}/>
      <Cards topDivider/>
      {/* <Cta  split topDivider style={{backgroundColor: "#fff"}}/>
      <Sta  split topDivider />
      <PRta  split topDivider style={{backgroundColor: "#fff"}}/> */}
    </>
  );
}

export default Home;