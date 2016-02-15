// server.js
var express = require('express');
var Twitter = require('twitter');

var twclient = new Twitter({
  consumer_key: '', // debes poner los datos correctos en estos campos
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// creamos la applicacion con express
var app = express();

// configuramos la carpeta 'public' como una carpeta de contenido estatico, html, css, etc.
app.use(express.static('public'));

app.get('/ultimotweet/:user', function(req, res){

  // preparamos los datos del usuario a consultar
  var usuario = {
	// en screen_name, pones el nombre de usuario sin la arroba.
	// req.params.user, el valor que viene en la solicitud ej: /ultimotweet/nombreuser => nombreuser
    screen_name: req.params.user,
    // la cantidad de mensajes a obtener
    count: 1,
    // solo mensajes propios (no re-tweets)
    include_rts: false
  };

  twclient.get('statuses/user_timeline', usuario, function(error, tweets, response){
    if(error) throw error; // se produjo un error, manejar aquí

    if (tweets.length) {
      // como hay tweets, con res.send enviamos la respuesta al navedador.
	  res.send(tweets[0].text);
    } else {
      // como no hay tweets mandamos un mensaje que lo explique.
	  res.send('El usuario no ha twiteado aun!');
    }
  });

});

app.listen(3000);


