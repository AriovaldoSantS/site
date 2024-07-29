// src/pages/Blog.tsx
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Primeira Palestra',
    content: 'Conteúdo da primeira palestra.',
    image: 'path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Segundo Treinamento',
    content: 'Conteúdo do segundo treinamento.',
    image: 'path/to/image2.jpg',
  },
  {
    id: 3,
    title: 'Consultoria Especializada',
    content: 'Conteúdo da consultoria especializada.',
    image: 'path/to/image3.jpg',
  },
];

const Blog: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
