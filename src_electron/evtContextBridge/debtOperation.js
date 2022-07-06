const { ipcMain } = require('electron')

const { insertDebt } = require('../db/debt')
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
}

module.exports = { triggerEventsDebt }
