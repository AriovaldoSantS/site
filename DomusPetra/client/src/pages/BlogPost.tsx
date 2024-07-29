import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{ title: string; content: string } | null>(null);

  // Simula a busca de um post (substitua isso pela chamada real à API ou dados reais)
  useEffect(() => {
    const fetchPost = async () => {
      // Exemplo de dados
      const fetchedPost = {
        title: `Post ${id}`,
        content: `Conteúdo do Post ${id}`,
      };
      setPost(fetchedPost);
    };

    fetchPost();
  }, [id]);

  return (
    <Container>
      {post ? (
        <>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1">{post.content}</Typography>
        </>
      ) : (
        <Typography variant="body1">Carregando...</Typography>
      )}
    </Container>
  );
};

export default BlogPost;
