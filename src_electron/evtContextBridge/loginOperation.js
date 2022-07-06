const { ipcMain } = require('electron')

const { login } = require('../db/login.js')

const triggerEventsLogin = () => {
  ipcMain.handle('login:login', async (_, { username, password }) => {
    const result = await login({ username, password })
    return result
  })
}

module.exports = { triggerEventsLogin }
