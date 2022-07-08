const { ipcMain } = require('electron')

const { insertDebtor, getDebtors, updateDebtor } = require('../db/debtor')
const { stractorToken } = require('../middlewares/stractortoken')

const triggerEventsDebtor = () => {
  ipcMain.handle('debtor:getDebtors', async (_, { token }) => {
    const idUser = stractorToken({ token })
    if (!idUser) return false

    return await getDebtors()
  })
  ipcMain.handle('debtor:insertDebtor', async (_, { token, name, lastName, motherLastName, address }) => {
    const idUser = stractorToken({ token })
    if (!idUser) return false

    return await insertDebtor({
      idUser: idUser.id, name, lastName, motherLastName, address
    })
  })
  ipcMain.handle('debtor:updateDebtor', async (_, { token, idDebtor, address }) => {
    const idUser = stractorToken({ token })
    if (!idUser) return false

    return await updateDebtor({
      address, idUser: idUser.id, idDebtor
    })
  })
}

module.exports = { triggerEventsDebtor }
