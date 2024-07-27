import React from 'react';
import AboutSection from '../components/ContatoSection';
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import CoachHighlight from '../components/CoachHighlight';
import ServicesHighlight from '../components/ServicesHighlight';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <CoachHighlight
        imageUrl="/path/to/coach-image.jpg" // Substitua pelo caminho real da imagem
        title="João Silva"
        quote="Transforme sua vida com um coaching especializado."
      />
     
      <ServicesHighlight />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
