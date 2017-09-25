var mongoose = require('mongoose')
Event = mongoose.model('Events');


exports.createEvent = function (req, res) {

  var newEvent = new Event(req.body)
  newEvent.save(function (err, event) {

    if (err)
    res.send(err)
    res.json(event)
  })
}
