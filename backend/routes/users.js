var express = require('express');
var router = express.Router();
const { getUsers, addUser } = require('../controller/UsersController');

/* GET all users listing. */
/* localhost:3001:users/all*/
router.get('/all', getUsers);

/* POST add a new user*/
/* localhost:3001:users/new*/
router.post('/new', addUser)

module.exports = router;
