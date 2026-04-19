const express = require('express');
const app = express();

app.use(express.json());

// routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// test
app.get('/', (req, res) => {
  res.send('Server is working ');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});