import passport from "passport";
import TwitterStrategy from "passport-twitter";
import {createToken} from './jwt.js'

export default function authConfig(app, config, userAuthModel) {
    app.use(passport.initialize())

    passport.serializeUser(function (userID, done) {
        done(null, userID);
    });

    passport.deserializeUser(function (id, done) {
        userAuthModel.findOne({ twitterHandle: id }, function (err, user) {
            done(err, user);
        });
    });

    passport.use(
        new TwitterStrategy(
            {
                consumerKey: config.TWITTER_CONSUMER_KEY,
                consumerSecret: config.TWITTER_CONSUMER_SECRET,
                callbackURL: config.CALLBACK_URL,
            },
            async function (token, tokenSecret, profile, cb) {
                // save to db here
                const userId = profile.id;
                const userName = profile.username;
                const imageUrl = profile._json.profile_image_url;
                let existingUser;
                try {
                    existingUser = await userAuthModel.findOne({ twitterHandle: userId });
                } catch (err) {
                    console.log(err)
                } try {
                    if (!existingUser) {
                        const userModel = new userAuthModel({
                            twitterHandle: userId,
                            name: userName,
                            imageUrl: imageUrl,
                        });
                        await userModel.save();
                    }

                } catch (err) {
                    console.log(err)
                }
                console.log('user saved')
                cb(null, userId);
            }
        )
    );
    app.get("/auth/twitter", passport.authenticate("twitter"));

    app.get(
        "/auth/twitter/callback",
        passport.authenticate("twitter"),
        function (req, res) {
            // Successful authentication, redirect home.
            // send JWT here
            const jwt = createToken(req.user)
            res.cookie('jwt',jwt, {maxAge: 3600000})
            res.redirect(config.AUTH_REDIRECT);
        }
    );
    return;
}
