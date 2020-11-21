import express from 'express';
import getCurrentUser from './getCurrentUser.js';
import logout from './logout.js';
import getEvents from './getEvents.js';
import createEvent from './createEvent.js'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/getCurrentUser', getCurrentUser)
routes.post('/logout', logout)
routes.get('/getEvents', getEvents)
routes.post('/createEvent', createEvent)
export default routes