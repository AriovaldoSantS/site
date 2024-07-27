import React from 'react';
import AboutSection from '../components/ContatoSection';
import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import CoachHighlight from '../components/CoachHighlight';
import ServicesHighlight from '../components/ServicesHighlight';
import Testimonials from '../components/Testimonials';
import img_fundo from "../assets/img/home/Fabiano - Google.jpg";

const Home: React.FC = () => {
  return (
    <div style={{
      backgroundImage: `url(${img_fundo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: 'white',
    }}>
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
    </div>
  );
};

export default Home;
