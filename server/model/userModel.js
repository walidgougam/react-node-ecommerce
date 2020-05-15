const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const requiredString = {
  type: String,
//   required: true
}

const requiredNumber = {
  type: Number,
//   required: true
}

const defaultRequiredDate = {
  type: Date,
  default: Date.now,
//   required: true
}

const logEntrySchema = new mongoose.Schema(
  {
    title: requiredString,
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0
    },
    latitude: {
      ...requiredNumber,
      min: -90,
      max:90 
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
      },
    createdAt: defaultRequiredDate,
    updatedAt: defaultRequiredDate,
    visitDate: {
      type: Date,
    //   required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('logEntry', logEntrySchema)
