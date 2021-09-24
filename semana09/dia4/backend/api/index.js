const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config/index')
const productosApi = require('./routes/productos')


/********************************************************************************************** */
//para google oauth
const cookieSession = require('cookie-session')
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleSecretKey,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile)
       /*User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });*/
       return done(null,profile)
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.get('/failed', (req, res) => res.send('error en login de google'))

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.send('estas logueado')
  });


/********************************************************************************************** */
/***************************** PARA AUTORIZACIÓN DE TOKENS DE GOOGLE **************************/
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(config.googleClientID)
app.post("/validargoogletoken", async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: config.googleClientID
    });
    const { name, email, picture } = ticket.getPayload();    
    //aqui registramos en la base de datos
    res.status(201)
    res.json(user)
})
/*********************************************************************************************/

app.use(cors())

productosApi(app)


app.listen(config.port,function(){
    console.log(`Servidor listo http://localhost:${config.port}`)
})