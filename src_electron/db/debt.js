const Debt = require('../models/Debt')
const Registerpay = require('../models/RegisterPay')
const handleErrors = require('../utils/handleErrors')

const insertDebt = async ({
  idDebtor, idUser, article, description, total
}) => {
  try {
    if (!(article && description && total && idDebtor && idUser)) {
      throw new Error('allParametersRequired')
    }

    const newDebt = new Debt({
      article,
      description,
      total,
      idDebtor,
      idUser,
      date: new Date()
    })

    const savedDebt = await newDebt.save()
    return savedDebt.toJSON()
  } catch (error) {
    return handleErrors({ error })
  }
}
const payDebt = async ({
  idDebt, idDebtor, idUser
}) => {
  try {
    if (!(idDebtor && idUser && idDebt)) {
      throw new Error('allParametersRequired')
    }

    const getDebt = await Debt.findById(idDebt)
    if (!getDebt) return false

    const newRegisterpay = new Registerpay({
      article: getDebt.article,
      description: getDebt.description,
      total: getDebt.total,
      idDebtor,
      idUser,
      date: new Date()
    })

    await newRegisterpay.save()

    return await Debt.findByIdAndRemove(idDebt).then(() => {
      return true
    }).catch(() => {
      return false
    })
  } catch (error) {
    return handleErrors({ error })
  }
}

module.exports = {
  insertDebt,
  payDebt
}
