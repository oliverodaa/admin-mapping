module.exports = {
  renderPage: function(req, res, next) {
    res.render('simple',
      {
        title: "Know Your University",
        footerText: "Footer Text"
      });
  }
};