const express = require('express');
const passport = require('passport');
const router = express.Router();
const axios = require('axios');
const { dominio_developer } = require('../../util/domino');
const { config } = require('../../config/index');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


router.get(`/google`, passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ] } ), function(req, res){
        console.log('ruta de google');
    });

router.get(`/google/callback`, passport.authenticate( 'google', { 
     failureRedirect: '/login'
}), function(req, res){
    console.log('se redirecciona');
    res.redirect(`/app?session=${app.locals.token}`);
});

passport.serializeUser(function(user, done){
    console.log(user.sub + ' serialize');
    done(null, user);
});

passport.deserializeUser(function(user, done){
    console.log(user.sub + ' deSerialize');
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID : config.googlePublic,
    clientSecret: config.googleSecret,
    callbackURL: "/api/auth/google/callback"
  }, async (req, res, profile, done) => {
    try {
        const resl = await axios({
            method: 'post',
            url: `${dominio_developer()}/api/login/autenticacion/social`,
            data: {
                id: profile._json.sub,
                user_name: profile._json.name,
                email: profile._json.email,
                avatar: profile._json.picture,
                metodo: 2
            }
        });

        app.locals.token = resl.data.token;
        console.log(resl.data.token);
    } catch (error) {    
        console.log( error + ' error en autenticacion google')
        //res.redirect(`/login`);
    }
   
    return done(null, profile._json);    
}));



module.exports = router;