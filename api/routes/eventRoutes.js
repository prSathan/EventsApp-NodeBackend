module.exports = function(app){
  var event = require('../controllers/eventController')


  app.route('/events')
  .get(event.listEvents)
  .post(event.createEvent)

}
