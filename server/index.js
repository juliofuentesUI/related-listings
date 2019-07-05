const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.post('/rooms/listings', (req, res) => {

});

app.get('/rooms/listings', (req, res) => {

});

app.post('/rooms/listings/reviews/', (req, res) => {

});

app.get('/rooms/listings/reviews/', (req, res) => {
  
});

app.post('/rooms/listings/user_info/', (req, res) => {
  
});

app.get('/rooms/listings/user_info/', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});