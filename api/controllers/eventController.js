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

exports.listEvents = function (req, res) {

  Event.find({}, function (err, event) {
    if (err)
    res.send(err)
    res.json(event)
  })
}

exports.readEvent = function (req, res) {

  Event.findById(req.params.eventId, function (err, event) {
    if (err)
    res.send(err)
    res.json(event)
  })
}
