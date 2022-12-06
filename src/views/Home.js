import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Sta from '../components/sections/Sta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" style={{backgroundColor: "#fff"}}/>
      <Testimonial topDivider/>
      <Cta  split topDivider style={{backgroundColor: "#fff"}}/>
      <Sta  split topDivider />

    </>
  );
}

export default Home;