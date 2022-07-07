const { ipcMain } = require('electron')

const { getRegisterPays } = require('../db/registerPay.js')

const triggerEventsRegisterPays = () => {
  ipcMain.handle('register:get-register-pays', async () => {
    const result = await getRegisterPays()
    if (result?.error) return { error: true }

    return result
  })
}

module.exports = { triggerEventsRegisterPays }
