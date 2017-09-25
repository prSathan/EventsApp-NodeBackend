module.exports = function(app){
  var event = require('../controllers/eventController')


  app.route('/events')
  .post(event.createEvent)

}
