import { getUser } from './getCurrentUser.js';
import Events from '../models/event.js'
import twitterClient from '../twitter/index.js'
export default async (req, res) => {
    
    let events = await Events.find({}).limit(20)
    events.push({hashtags: ['codechella']})
    console.log(events)
    let eventsWithTweets = []
    for(const event of events) {
        let q = event.hashtags.map(e => `#${e}`).join(' OR')
        const tweets = await twitterClient.tweets.search({q:q, count: 100, geocode:'39.72004,-75.91400,500km'})
        eventsWithTweets.push({...event, tweets: tweets.statuses})
    }

    res.json({events: eventsWithTweets})

}