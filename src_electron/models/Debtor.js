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
  idUser: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  date: Date
})

debtorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

debtorSchema.plugin(uniqueValidator)

const Debtor = model('Debtor', debtorSchema)

module.exports = Debtor
