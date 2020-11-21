import express from 'express';
import getCurrentUser from './getCurrentUser.js';
import logout from './logout.js';

const routes = express.Router()

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/getCurrentUser', getCurrentUser)
routes.post('/logout', logout)

export default routes