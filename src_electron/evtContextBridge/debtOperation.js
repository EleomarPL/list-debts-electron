const { ipcMain } = require('electron')

const { insertDebt, getDebtsByDebtor, payDebt } = require('../db/debt')
const { stractorToken } = require('../middlewares/stractortoken')

const triggerEventsDebt = () => {
  ipcMain.handle('debt:insertDebt', async (_, { token, idDebtor, listDebts }) => {
    const decoded = stractorToken({ token })
    if (!decoded) return false

    const debts = await Promise.all(
      listDebts.map(async (debt) => {
        return await insertDebt({
          idDebtor,
          idUser: decoded.id,
          article: debt.article,
          description: debt.description,
          total: debt.total
        })
      })
    )
    return debts
  })
  ipcMain.handle('debt:getDebtByDebtor', async (_, { idDebtor }) => {
    return await getDebtsByDebtor({ idDebtor })
  })
  ipcMain.handle('debt:payDebt', async (_, { token, listDebts }) => {
    const decoded = stractorToken({ token })
    if (!decoded) return false

    const payDebts = await Promise.all(
      listDebts.map(async (debt) => {
        return await payDebt({
          idDebt: debt.id,
          idDebtor: debt.idDebtor,
          idUser: decoded.id
        })
      })
    )
    return payDebts
  })
}

module.exports = { triggerEventsDebt }
