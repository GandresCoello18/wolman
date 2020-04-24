const express = require('express');
const passport = require('passport');
const router = express.Router();
const { config } = require('../../config/index');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: config.facebookPublic,
    clientSecret: config.facebookSecret,
    callbackURL: "https://wolman.now.sh/api_F/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    /*User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });*/
    console.log(profile);
    return done(null, user);
  }
));

router.get('/facebook',passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/app');
  });


passport.serializeUser(function(user, done){
    console.log(user.sub + ' serialize');
    done(null, user);
});

passport.deserializeUser(function(user, done){
    console.log(user.sub + ' deSerialize');
    done(null, user);
});


module.exports = router;