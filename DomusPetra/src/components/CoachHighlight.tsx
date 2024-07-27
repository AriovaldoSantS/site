import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';


interface CoachHighlightProps {
  imageUrl: string;
  title: string;
  quote: string;
}

const CoachHighlight: React.FC<CoachHighlightProps> = ({ imageUrl, title, quote }) => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Card sx={{ maxWidth: 345, margin: 'auto' }}>
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={title}
        />
      </Card>
      <Typography variant="h4" gutterBottom sx={{ marginTop: 2 }}>
        {title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        "{quote}"
      </Typography>
    </Box>
  );
};

export default CoachHighlight;
