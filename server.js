const express = require('express');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('You are a boss man, you can do it');
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server is running on port 5000~*~*~*~*`));