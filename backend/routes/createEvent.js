import Event from '../models/event.js'

export default async (req, res) => {
    const event = req.body
    const newEvent = new Event(event)
    await newEvent.save()
    res.sendStatus(200)
}