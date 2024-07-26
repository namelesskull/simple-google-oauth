const express = require('express');
const session = require('express-session');
const authRoutes = require('./src/routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static('public'));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
