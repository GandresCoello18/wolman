require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    googlePublic: process.env.GOOGLE_PUBLIC,
    googleSecret: process.env.GOOGLE_SECRET,
    twitterPublic: process.env.TWITTER_PUBLIC,
    twitterSecret: process.env.TWITTER_SECRET,
    facebookPublic: process.env.FACEBBOK_PUBLIC,
    facebookSecret: process.env.FACEBOOK_SECRET
}

module.exports = {
    config
}