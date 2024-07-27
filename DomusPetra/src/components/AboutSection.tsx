import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import fundo_sobre from "../assets/img/ABOUT/img_fundo.jpg";

const AboutSection: React.FC = () => {
  return (
    <Box sx={{ padding: 0, textAlign: 'center', width: '99vw',}}  style={{color:"black"}}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${fundo_sobre})`,
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          color: 'white',
        }}
      >
         
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',           
            transform: 'translate(-50%, -30%)',
            background:"rgba(0, 0, 0, 0.529)",
            padding: 5,
            borderRadius: '8px',
            width: '100%',
            height: "100%",
            textAlign: 'left',
            textAlignLast: "center",
          }}
        >
          
          <Typography variant="h1" gutterBottom sx={{ position: 'relative', zIndex:1, } }>
          <h1 style={{marginTop: "100px", textShadow:"2px 2px 2px  gray"}}
          >Sobre Nós</h1>
        </Typography>
          <Typography variant="h5" component="h3"
          sx={{
            position: 'absolute',
            top: '79%',
            left: '50%',           
            transform: 'translate(-50%, -30%)',
            background:"rgba(0, 0, 0, 0.529)",
            padding: 4,
            borderRadius: '8px',
            width: '100%',
            height: "30%",
            textAlign: 'left',
            textAlignLast: "center",
          }} >
            Somos especialistas em coaching e estamos aqui para ajudar você a alcançar seus objetivos.
            Nossa abordagem personalizada garante resultados eficazes e duradouros.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 1,  }}>
        <Grid item xs={12} md={8} sx={{ backgroundColor:"white", padding:"5px" }}>
          <Typography variant="body1">
            <h2>DOMUS PETRA, do latim, significa Casa de Rocha.</h2>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Nossa abordagem é de que o ser humano é comparado à uma casa literal, porém sempre em construção.
            De modo que precisa ser constantemente melhorado, reestruturado e restaurado. Com essa visão,
            entendemos que o ser humano necessita de sólidos fundamentos, bons pilares de sustentação,
            cobertura consciente e protetora e, sobretudo, deve ser funcional e eficiente.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            O ser humano é incrivelmente inteligente, habilidoso, flexível e adaptável. E contrariando o ditado
            popular “pau que nasce torto morre torto”, nós afirmamos que o ser humano tem plena capacidade, e
            até o dever de melhorar continuamente.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            São as pessoas que promovem as mudanças. Podemos constituir empresas, organizações e sociedade
            cada vez melhores, contanto que os indivíduos sejam melhores. As pessoas são a grande força de
            transformação. O foco deve ser nas pessoas. Sempre!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Para a empresa: Eficiência e Crescimento Sustentável
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            A competitividade é global e não há espaços para baixa eficiência, desperdícios e perdas. Por isso a
            melhoria contínua dos processos produtivos e fluxos de trabalho devem ser uma constante. E o
            estabelecimento de processos eficientes com contínua evolução de desempenho são premissas
            fundamentais para o crescimento sustentável.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Por meio de metodologias robustas e técnicas modernas de gestão desenvolvemos as pessoas e os
            processos para o alcance dos melhores resultados, com ênfase na eficiência e crescimento sustentável.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Para o indivíduo: Felicidade e Qualidade de Vida
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Acreditamos que a felicidade é possível no dia presente, e não um sonho a ser alcançado num futuro
            desconhecido. Pois felicidade não é o destino e sim a viagem! Felicidade é o dia a dia com satisfação e
            plenitude, o que se obtém pela conquista do equilíbrio adequado entre os pilares dessa casa chamada
            ser humano.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Entendemos que a qualidade de vida e felicidade são conquistados por meio do equilíbrio de cinco
            pilares essenciais, os quais são saúde mental, física, espiritual, social e financeira.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, padding: 1 }}> Entendemos que a qual
            Auxiliar os indivíduos no fortalecimento dos cinco pilares, de modo equilibrado, é uma das nossas
            missões!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
