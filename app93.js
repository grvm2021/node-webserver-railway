const express = require('express')
const hbs = require('hbs');
const app = express();
const port = 8080;
// LLamamos a handlebars
// como argumento de partials podemos tener callback
app.set('view engine', 'hbs');
// cuando tenemos la certeza de no falla lo quitamos
hbs.registerPartials( __dirname + '/views/partials');
app.use( express.static('public'));
// para poder aceptar localhost:8080/hola-mundo
app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Gabriel Roberto Villamarín Moros',
      titulo: 'Curso de Node'
    });
  });
  // ruta generic
  app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Gabriel Roberto Villamarín Moros',
      titulo: 'Curso de Node'
    });
  });
app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Gabriel Roberto Villamarín Moros',
      titulo: 'Curso de Node'
    })
  })
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



