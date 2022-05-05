const express = require('express');

// App
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static("src"));

// Settings
const port = 8080;

// Route
app.get('/', (req, res) => {
  res.status(200).render("index.ejs");
});

// Server listening
app.listen(port, () => {
  console.log("Server écoute le port", port);
});