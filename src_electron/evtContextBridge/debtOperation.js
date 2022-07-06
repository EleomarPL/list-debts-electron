const { ipcMain } = require('electron')

const { insertDebt, getDebtsByDebtor } = require('../db/debt')
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
}

module.exports = { triggerEventsDebt }
