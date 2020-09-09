const routes = require('express').Router();
const users = require('./users.js');
const appInsights = require('applicationinsights');


routes.post('/login', (req, res) => {
    const fndUser = users.find(user => user.username === req.body.username);
    if (fndUser) {
        delete fndUser['password'];
        res.status(200).json(fndUser);
    } else {
        const client = appInsights.defaultClient;
        client.trackTrace({
            message: `Invalid login attemps: ${user.username}`,
            severity: appInsights.Contracts.SeverityLevel.Error
        });
        res.sendStatus(404);
    }
});

module.exports = routes;
