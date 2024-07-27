import React from 'react';
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import CoachHighlight from '../components/CoachHighlight';
import AboutSection from '../components/ContatoSection';
import ServicesHighlight from '../components/ServicesHighlight';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Carousel  />
      <CoachHighlight
        imageUrl="/path/to/coach-image.jpg" // Substitua pelo caminho real da imagem
        title="João Silva"
        quote="Transforme sua vida com um coaching especializado."
        
      />
      <ServicesHighlight />
      <Testimonials />
      <CallToAction />
      <AboutSection />
    </>
  );
};

export default Home;
