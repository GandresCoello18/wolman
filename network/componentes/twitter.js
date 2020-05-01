const express = require('express');
const passport = require('passport');
const router = express.Router();
const axios = require('axios');
const { dominio_developer } = require('../../util/domino');
const { config } = require('../../config/index');
const TwitterStrategy = require('passport-twitter').Strategy;
const app = express();



router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) { res.redirect(`/app?session=${app.locals.token_2}`); });



passport.serializeUser(function(user, done){
    console.log(user.id + ' serialize');
    done(null, user);
});

passport.deserializeUser(function(user, done){
    console.log(user.id + ' deSerialize');
    done(null, user);
});

passport.use(new TwitterStrategy({
  consumerKey: config.twitterPublic,
  consumerSecret: config.twitterSecret,
  callbackURL: "/api_T/auth/twitter/callback"
},
async function(token, tokenSecret, profile, done) {
  
  const user = {
    id: profile._json.id,
    user_name: profile._json.name,
    email: 'null',
    avatar: profile._json.profile_image_url_https,
    metodo: 3
  }    


  try {
    const resl = await axios({
        method: 'post',
        url: `${dominio_developer()}/api/login/autenticacion/social`,
        data: user
    });
        app.locals.token_2 = resl.data.token;
        console.log(resl.data.token);
    } catch (error) {    
        console.log( error + ' error en autenticacion twitter')
    }

  console.log(profile);
  return done(null, user);

}
));


module.exports = router;