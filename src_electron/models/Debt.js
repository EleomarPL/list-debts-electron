const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Double = require('@mongoosejs/double')

const debtSchema = new Schema({
  article: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 150
  },
  total: {
    type: Double
  },
  idDebtor: [{
    type: Schema.Types.ObjectId,
    ref: 'Debtor'
  }],
  idUser: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  date: Date
})

debtSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

debtSchema.plugin(uniqueValidator)

const Debt = model('Debt', debtSchema)

module.exports = Debt
