const google = require('./componentes/google');
const twitter = require('./componentes/twitter');
const facebook = require('./componentes/facebook');

const router = function(server){
    server.use('/api/auth/google', google);
    server.use('/api_T/auth/twitter', twitter);
    server.use('/api_F/auth/facebook', facebook);
}

module.exports = router;