const mongoose = require('mongoose')

//what is this schema for?
//this schema would prevent other types of data from being added if it does not match this
//gives us the ability to reject any other types
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
