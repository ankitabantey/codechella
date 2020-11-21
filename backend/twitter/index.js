import twitter from 'twitter-api-client'
import config from '../config.js'


const twitterClient = new twitter.TwitterClient({
  apiKey: config.TWITTER_CONSUMER_KEY,
  apiSecret: config.TWITTER_CONSUMER_SECRET,
  accessToken: config.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: config.TWITTER_ACCESS_TOKEN_SECRET
});

export default twitterClient
