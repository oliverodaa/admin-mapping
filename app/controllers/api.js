var response = {
  data:"not implemented"
};
module.exports = {
  // Returns list of people
  people: function(req, res, next) {
    var dbData = [
      {
        "person_id":"pers_7",
        "name":"John a. powell",
        "gender":"m"
      },
      {
        "person_id":"pers_8",
        "name":"Victoria Robinson",
        "gender":"f"
      }
    ];
    res.send(dbData);
  },
  // Returns all data for specific person_id
  person: function(req, res, next) {
    // Look for
    res.send(response);
  },
  // Returns list of positions
  positions: function(req, res, next) {
    res.send(response);
  },
  // Returns all data for specific position
  position: function(req, res, next) {
    res.send(response);
  },
  // Returns list of roles
  roles: function(req, res, next) {
    res.send(response);
  }
};