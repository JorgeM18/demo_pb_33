const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/mensaje', (req, res) => {
  res.send('Hola a todos desde Heroku!')
});

app.listen(PORT, () => {
  console.log('Server is up and running on port: ', PORT);
})
