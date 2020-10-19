var express = require('express');
var usersRouter = express.Router();
const bodyParser = require('body-parser');
usersRouter.use(bodyParser.json());
/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = usersRouter;
