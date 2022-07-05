const { ipcMain } = require('electron')

const { isThereAdmin } = require('../db/user')

const triggerEventsLogin = () => {
  ipcMain.handle('initial:is-there-admin', async () => {
    const result = await isThereAdmin()
    if (result?.error) return false

    return result
  })
}

module.exports = { triggerEventsLogin }
