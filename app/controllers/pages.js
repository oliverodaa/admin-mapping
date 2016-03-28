var locals = {
        title: "Know Your University",
        footerText: "Website made by <a href='http://ollie-odonnell.com'>Ollie O'Donnell</a> in Berkeley, CA"
      };

module.exports = {
  renderPage: function(req, res, next) {
    res.render('simple',locals);
  },
  home: function(req, res, next) {
    res.render('home',locals);
  },
  people: function(req, res, next) {
    res.render('people',locals);
  },
  person: function(req, res, next) {
    res.render('person',locals);
  },
  positions: function(req, res, next) {
    res.render('positions',locals);
  },
  roles: function(req, res, next) {
    res.render('roles',locals);
  }
};