const express = require('express')
const app = express()
const port = 8080;
// servir contenido estatico (midleware).
// path estatico
// LLamamos a handlebars
app.set('view engine', 'hbs');

app.use( express.static('public'));

// para poder aceptar localhost:8080/hola-mundo
app.get('/', (req, res) => {
    res.render('home');
  });
  // si es otra ruta distinta a las anteriores
  // muestra error
app.get('/elements', (req, res) => {
    //res.send('public/404.html')
    // __dirname contiene la ruta completa donde
    // reside la aplicación
    res.sendFile(__dirname + '/public/elements.html')
  })
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



