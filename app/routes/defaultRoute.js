var controllers = require('../controllers/controllers.js');

module.exports = function (app) {
  app.get('/', renderPage);
  // Error handling
  app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
  })
};