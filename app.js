const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const movieRoutes = require("./routes/movie-routes");

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/movie-search', movieRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })