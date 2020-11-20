import passport from 'passport'
import TwitterStrategy from 'passport-twitter'

export default function authConfig(app, config) {

    passport.use(new TwitterStrategy({
        consumerKey: config.TWITTER_CONSUMER_KEY,
        consumerSecret: config.TWITTER_CONSUMER_SECRET,
        callbackURL: config.CALLBACK_URL
    },
        function (token, tokenSecret, profile, cb) {
            // save to db here
            console.log(token)
            console.log(tokenSecret)
        }
    ));
    app.get('/auth/twitter', passport.authenticate('twitter'))

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/login' }),
        function (req, res) {
            // Successful authentication, redirect home.
            // send JWT here
            res.redirect(config.AUTH_REDIRECT);
        });
    return

}