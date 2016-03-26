var pageController = require('../controllers/pages.js');
var apiController = require('../controllers/api.js');

module.exports = function (app) {
  /**
   * Rendering Views
   */
  app.get('/', pageController.home);

  app.get('/people', pageController.people);
  app.get('/people/:id', pageController.people);

  app.get('/positions', pageController.positions);
  app.get('/positions/:id', pageController.people);

  app.get('/roles', pageController.roles);
  /**
   * API Responses
   */
  app.get('/api/people', apiController.people);
  app.get('/api/person/:id', apiController.person);

  app.get('/api/positions', apiController.positions);
  app.get('/api/position/:id', apiController.position);

  app.get('/api/roles', apiController.roles);

  // Error handling
  app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
  });
};