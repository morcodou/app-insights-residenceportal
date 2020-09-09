const routes = require('express').Router();
const activities = require('./activities');

routes.get('/', (req, res) => {
  res.status(200).json(activities);
});

routes.post('/', (req, res) => {
  var activity = req.body;
  
  var maxId = 1;

  if (!activity.id) {
    for (item in activities) {
      if (activities[item].id > maxId) {
        maxId = activities[item].id ;
      }
    }
  }
  activity.id = maxId + 1;
  activities.push(activity);

  res.status(201).json(activity);
});

routes.delete('/:id', (req, res) => {
  var id = req.params.id;
  var index = activities.findIndex(activity => activity.id === id);
  activities.splice(index, 1);
  res.sendStatus(204);
});

module.exports = routes;
