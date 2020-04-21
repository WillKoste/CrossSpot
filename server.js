const express = require('express');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profiles);
app.use('/api/posts', posts);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server is running on port 5000~*~*~*~*`));