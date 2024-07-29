// src/components/AboutSection.tsx
import { Container, Typography, styled } from '@mui/material';
import React from 'react';
import aboutImage from '../assets/about.jpg'; // Certifique-se de ter a imagem no caminho correto

const Root = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
}));

const Image = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  marginBottom: theme.spacing(2),
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AboutSection: React.FC = () => {
  return (
    <Root>
      <Heading variant="h4">Sobre Nós</Heading>
      <Image src={aboutImage} alt="Sobre nós" />
      <Paragraph variant="body1">
        A DomusPetra é uma empresa dedicada a oferecer soluções de alta qualidade em consultoria e treinamentos para empresas e indivíduos. Nosso objetivo é ajudar nossos clientes a alcançar seus objetivos com eficiência e eficácia.
      </Paragraph>
      <Paragraph variant="body1">
        Com uma equipe de especialistas altamente qualificados e experientes, fornecemos serviços personalizados que atendem às necessidades específicas de cada cliente. Seja em consultoria estratégica, treinamentos especializados ou eventos de palestras, estamos aqui para apoiar e guiar nossos clientes em sua jornada para o sucesso.
      </Paragraph>
    </Root>
  );
};

export default AboutSection;
