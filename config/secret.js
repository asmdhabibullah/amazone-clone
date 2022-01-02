require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  database: process.env.DATABASE,
  secretKey: process.env.SECRET_KEY,

  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    profieField: ['emails', 'displayName'],
    callbackURL: 'https://caraeb-econn.herokuapp.com/auth/facebook/callback'
  }
}