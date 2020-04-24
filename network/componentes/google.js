const express = require('express');
const passport = require('passport');
const router = express.Router();
const { config } = require('../../config/index');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID : config.googlePublic,
    clientSecret: config.googleSecret,
    callbackURL: "https://wolman.now.sh/api/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    /*User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });*/
    const user = {
        sub: '111346997428461790776',
        name: 'Andres Coello',
        given_name: 'Andres',
        family_name: 'Coello',
        picture: 'https://lh3.googleusercontent.com/a-/AOh14Gi68nNJvumHVDrH9_a1egOBfBtfPc6a6DcbluY0Zw',
        email: 'goyeselcoca@gmail.com',
        email_verified: true,
        locale: 'es-419'
    }
    console.log(profile);
    return done(null, user);
}));

router.get(`/google`, passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ] } ), function(req, res){
        console.log('ruta de google');
    });

router.get(`/google/callback`, passport.authenticate( 'google', { 
    successRedirect: '/app', failureRedirect: '/login'
}));

passport.serializeUser(function(user, done){
    console.log(user.sub + ' serialize');
    done(null, user);
});

passport.deserializeUser(function(user, done){
    console.log(user.sub + ' deSerialize');
    done(null, user);
});


module.exports = router;