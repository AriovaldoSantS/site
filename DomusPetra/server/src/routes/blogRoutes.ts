import express from 'express';

const router = express.Router();

// Mock database
let posts = [
  { id: 1, title: 'Post 1', text: 'Texto do post 1', image: 'image1.jpg' },
  { id: 2, title: 'Post 2', text: 'Texto do post 2', image: 'image2.jpg' },
];

router.get('/', (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

export default router;
