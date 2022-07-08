const mongoose = require('mongoose')
const { Schema, model } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

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
    type: mongoose.Decimal128
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
}, { minimize: false })

debtSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.idDebtor = returnedObject.idDebtor.toString()
    returnedObject.idUser = returnedObject.idUser.toString()
    returnedObject.total = Number(returnedObject.total.toString())
    delete returnedObject._id
    delete returnedObject.__v

    return returnedObject
  }
})

debtSchema.plugin(uniqueValidator)

const Debt = model('Debt', debtSchema)

module.exports = Debt
