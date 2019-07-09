import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Raiza Alves',
//     email: 'raiza1_jp@hotmail.com',
//     password_hash: '8979347239847',
//   });

//   return res.json(user);
// });

export default routes;
