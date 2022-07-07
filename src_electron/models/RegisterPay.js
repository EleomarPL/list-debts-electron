const { Schema, model } = require('mongoose')
const Double = require('@mongoosejs/double')

const registerpaySchema = new Schema({
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
  idDebtor: {
    type: Schema.Types.ObjectId,
    ref: 'Debtor'
  },
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date
})

registerpaySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.idUser = returnedObject.idUser.toString()
    returnedObject.idDebtor = returnedObject.idDebtor.toString()
    delete returnedObject._id
    delete returnedObject.__v

    return returnedObject
  }
})

const Registerpay = model('Registerpay', registerpaySchema)

module.exports = Registerpay
