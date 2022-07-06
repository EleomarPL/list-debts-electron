const { ipcMain } = require('electron')

const { isThereAdmin, initialInsertAdmin } = require('../db/user.js')

const triggerEventsInitital = () => {
  ipcMain.handle('initial:is-there-admin', async () => {
    const result = await isThereAdmin()
    if (result?.error) return { error: true }

    return result
  })
  ipcMain.handle('user:insert-admin', async (_, { name, lastName, motherLastName, username, password }) => {
    return await initialInsertAdmin({
      name, lastName, motherLastName, username, password
    })
  })
}

module.exports = { triggerEventsInitital }
