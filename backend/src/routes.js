const express = require(`express`);
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.post('/', (req,res)=>{
  return res.json({message: `Olá ${req.body.username}`});
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/:userId/likes', LikeController.store)
routes.post('/users/:userId/dislikes', DislikeController.store)

module.exports = routes;
