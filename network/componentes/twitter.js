const express = require('express');
const passport = require('passport');
const router = express.Router();
const { config } = require('../../config/index');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: config.twitterPublic,
    consumerSecret: config.twitterSecret,
    callbackURL: "/api_T/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    /*User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(err, user);
    });*/
    console.log(profile);
    return done(null, user);
  }
));

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }),
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