// Carousel.tsx
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remova as setas, se desejado
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const items = [
    {
      title: 'Última Postagem',
      description: 'Descrição da última postagem.',
      imageUrl: '/path/to/latest-post.jpg',
      link: '/latest-post',
    },
    // ... outros itens
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={item.imageUrl}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
            </CardContent>
            <Box sx={{ padding: 2 }}>
              <Button variant="contained" color="primary" href={item.link}>
                Saiba Mais
              </Button>
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
