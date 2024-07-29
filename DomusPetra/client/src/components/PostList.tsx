// src/pages/PostList.tsx
import { Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';

// Supondo que você tenha um array de posts
const posts = [
  { id: 1, title: 'Post 1', excerpt: 'This is a summary of post 1.' },
  { id: 2, title: 'Post 2', excerpt: 'This is a summary of post 2.' },
  { id: 3, title: 'Post 3', excerpt: 'This is a summary of post 3.' },
];

const PostList: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Paper>
        <List>
          {posts.map(post => (
            <ListItem key={post.id} button>
              <ListItemText
                primary={post.title}
                secondary={post.excerpt}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default PostList;
