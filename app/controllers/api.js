module.exports = {
  // Returns list of people
  people: function(req, res, next) {
    var json = {
      hey:"hi",
      hello:1234
    };
    res.send(json);
  },
  // Returns all data for specific person_id
  person: function(req, res, next) {
    var json = {
      hey:"hi",
      hello:1234
    };
    res.send(json);
  },
  // Returns list of positions
  positions: function(req, res, next) {
    var json = {
      hey:"hi",
      hello:1234
    };
    res.send(json);
  },
  // Returns all data for specific position
  position: function(req, res, next) {
    var json = {
      hey:"hi",
      hello:1234
    };
    res.send(json);
  },
  // Returns list of roles
  roles: function(req, res, next) {
    var json = {
      hey:"hi",
      hello:1234
    };
    res.send(json);
  }
};