module.exports = {
  renderPage: function(req, res, next) {
    res.render('simple',
      {
        title: "yoyo",
        footerText: "Hey hey"
      });
  }
};