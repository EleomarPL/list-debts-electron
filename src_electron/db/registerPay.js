const Registerpay = require('../models/RegisterPay')
const handleErrors = require('../utils/handleErrors')

require('../models/Debtor')
require('../models/User')

const regexQuery = (value) => ({ $regex: '.*' + value + '.*' })

const getRegisterPays = async ({ value }) => {
  try {
    const debts = await Registerpay.find({
      $or: [
        { article: regexQuery(value) },
        { description: regexQuery(value) }
      ]
    })
      .populate('idDebtor')
      .populate('idUser')
    return debts.map(debt => debt.toJSON())
  } catch (error) {
    return handleErrors({ error })
  }
}

module.exports = {
  getRegisterPays
}
