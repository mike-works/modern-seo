const fetch = require('node-fetch');

module.exports = function(app) {
  app.get('/', (req, res) => {
    fetch('https://api.mike.works/api/v1/courses')
      .then((response) => response.json())
      .then((jsonData) => {
        res.render('index', {courses: jsonData.data});
      })
  });

  app.get('/course/:id', (req, res) => {
    fetch('https://api.mike.works/api/v1/courses/' + req.params.id)
      .then((response) => response.json())
      .then((jsonData) => {
        res.render('course', {course: jsonData.data});
      })
  });
}