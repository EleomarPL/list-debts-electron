const { ipcMain } = require('electron')

const { isThereAdmin } = require('../db/user')

const triggerEventsInitital = () => {
  ipcMain.handle('initial:is-there-admin', async () => {
    const result = await isThereAdmin()
    if (result?.error) return { error: true }

    return result
  })
}

module.exports = { triggerEventsInitital }
