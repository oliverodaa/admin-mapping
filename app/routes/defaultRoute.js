var controllers = require('../controllers/controllers.js');

module.exports = function (app) {
  /**
   * Rendering Views
   */
  app.get('/', controllers.home);

  app.get('/people', controllers.people);
  app.get('/people/:id', controllers.people);

  app.get('/positions', controllers.positions);
  app.get('/positions/:id', controllers.people);

  app.get('/roles', controllers.roles);
  /**
   * API Responses
   */

  // Error handling
  app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
  });
};