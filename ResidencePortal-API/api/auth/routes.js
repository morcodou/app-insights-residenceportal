const routes = require('express').Router();
const users = require('./users.js');

routes.post('/login', (req, res) => {
    const fndUser = users.find(user => user.username === req.body.username);
    if (fndUser)
    {
        delete fndUser['password'];
        res.status(200).json(fndUser);
    } else {
        res.sendStatus(404);
    }
});

module.exports = routes;
