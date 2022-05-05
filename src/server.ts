const express = require('express');
const parser = require('body-parser');
const { rpn } = require('./models/ts/rpn.ts');

// App
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static("src"));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Settings
const port = 8080;

// Route
app.get('/', (req, res) => {
  res.status(200).render("index.ejs");
});
app.post('/calculate', (req, res) => {
  const { calcul } = req.body;

  if (calcul) {
    let result = "" + rpn(calcul);
    return res.status(200).json({ result: result, calcul: calcul });
  }
  else {
    return res.status(200).json({ result: "Error", calcul: calcul });
  }
});

// Server listening
app.listen(port, () => {
  console.log("Server écoute le port", port);
});