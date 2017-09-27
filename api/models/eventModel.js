var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EventSchema = new Schema({
  title: {
    type: String,
    Required: 'Please enter'
  },
  date_from: {
    type: String,
    Required: 'Please enter'
  },
  date_to: {
    type: String,
    Required: 'Please enter'
  },
  location: {
    type: String,
    Required: 'Please enter'
  },
  description: {
    type: String,
    Required: 'Please enter'
  },

})

module.exports = mongoose.model('Events', EventSchema)
