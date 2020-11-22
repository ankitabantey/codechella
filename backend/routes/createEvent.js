import Event from '../models/event.js'
import {v4 as uuidv4} from 'uuid'

export default async (req, res) => {
    const event = req.body
    console.log(req.body)
    const uid = uuidv4()
    const newEvent = new Event({...event, id: uid})
    await newEvent.save()
    res.sendStatus(200)
}