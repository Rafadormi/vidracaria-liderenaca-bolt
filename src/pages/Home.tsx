import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesCarousel from '../components/ServicesCarousel';
import PartnersCarousel from '../components/PartnersCarousel';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesCarousel />
      <PartnersCarousel />
    </div>
  );
};

export default Home;