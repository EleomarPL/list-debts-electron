const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const debtorSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  motherLastName: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  address: {
    type: String,
    minlength: 2,
    maxlength: 150
  },
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date
}, { minimize: false })

debtorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.idUser = returnedObject.idUser.toString()
    delete returnedObject._id
    delete returnedObject.__v

    return returnedObject
  }
})

debtorSchema.plugin(uniqueValidator)

const Debtor = model('Debtor', debtorSchema)

module.exports = Debtor
