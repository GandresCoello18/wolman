const google = require('./componentes/google');
const twitter = require('./componentes/twitter');
const facebook = require('./componentes/facebook');

const router = function(server){
    server.use('/api/auth', google);
    server.use('/api_T/auth', twitter);
    server.use('/api_F/auth', facebook);
}

module.exports = router;