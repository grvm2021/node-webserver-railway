const express = require('express')
const app = express()
const port = 8080;
// servir contenido estatico (midleware).
// path estatico
app.use( express.static('public'));
// se manejas dos exepciones la /, y /hola-mundo
// acepta localhost:8080/
// se tienen 3 rutas /, /hola-mundo, y *
// servir contenido estatico
// *** 
//  el codigo siguinte se retira. esta impluido
// app.use(.....)
//  app.get('/', (req, res) => {
//  res.send('Home page')
//  })
// ****
// para poder aceptar localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
  })
  // si es otra ruta distinta a las anteriores
  // muestra error
app.get('*', (req, res) => {
    //res.send('public/404.html')
    // __dirname contiene la ruta completa donde
    // reside la aplicación
    res.sendFile(__dirname + '/public/404.html')
  })
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });



