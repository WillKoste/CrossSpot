const express = require('express');
const users = require('./routes/users');
const auth = require('./routes/auth');
const profiles = require('./routes/profiles');

const app = express();

app.get('/', (req, res) => {
  res.send('You are a boss man, you can do it');
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server is running on port 5000~*~*~*~*`));