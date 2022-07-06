const { ipcMain } = require('electron')

const { insertDebtor } = require('../db/debtor')
const { filterAdmin } = require('../middlewares/stractortoken')

const triggerEventsDebtor = () => {
  ipcMain.handle('debtor:insertDebtor', async (_, { token, name, lastName, motherLastName, address }) => {
    const idUser = filterAdmin({ token })
    if (!idUser) return false

    return await insertDebtor({
      idUser, name, lastName, motherLastName, address
    })
  })
}

module.exports = { triggerEventsDebtor }
