const Debtor = require('../models/Debtor')
const handleErrors = require('../utils/handleErrors')

const insertDebtor = async ({
  idUser, name, lastName, motherLastName, address
}) => {
  try {
    if (!(name && lastName && motherLastName && address && idUser)) {
      throw new Error('allParametersRequired')
    }

    const newDebtor = new Debtor({
      name,
      lastName,
      motherLastName,
      address,
      idUser,
      date: new Date()
    })

    const savedDebtor = await newDebtor.save()
    return {
      ...savedDebtor._doc,
      id: savedDebtor._id.toString(),
      idUser: null
    }
  } catch (error) {
    return handleErrors({ error })
  }
}

const updateDebtor = async ({
  idUser, idDebtor, address
}) => {
  try {
    if (!(address && idUser && idDebtor)) {
      throw new Error('allParametersRequired')
    }

    const debtor = await Debtor.findById(idDebtor)
    if (!debtor) return false
    if (debtor.idUser.toString() !== idUser.toString()) return false

    const editDebtor = {
      address
    }

    const savedChangeDebtor = await Debtor.findByIdAndUpdate(idDebtor, editDebtor, { new: true })
    return savedChangeDebtor
  } catch (error) {
    return handleErrors({ error })
  }
}

module.exports = {
  insertDebtor,
  updateDebtor
}
