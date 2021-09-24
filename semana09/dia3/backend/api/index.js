const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config/index')
const productosApi = require('./routes/productos')

//para google oauth
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
/*
passport.use(
    new googleStrategy({
        clienteID : config.googleClientID,
        clientSecret: config.googleSecretKey,
        callbackURL: "http://localhost:3000"
    },
    function(accessToken,refreshToken,profile,done){
        User.findOrCreate({googleId: profile.id},function (err,user){
            return done(err,user)
        })
    }
))*/
//console.log(config.googleClientID)
passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleSecretKey,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/productos');
  });

app.use(cors())

productosApi(app)


app.listen(config.port,function(){
    console.log(`Servidor listo http://localhost:${config.port}`)
})