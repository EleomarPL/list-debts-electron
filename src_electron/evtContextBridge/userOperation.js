const { ipcMain } = require('electron')

const { filterAdmin } = require('../middlewares/stractortoken')
const { getUsers, insertNewUser, updateUser } = require('../db/user')

const triggerEventsUser = () => {
  ipcMain.handle('user:get-users', async (_, { token }) => {
    const id = filterAdmin({ token })
    if (!id) return false

    return await getUsers()
  })
  ipcMain.handle('user:insert-user', async (_, { token, name, lastName, motherLastName, username, password }) => {
    const id = filterAdmin({ token })
    if (!id) return false

    return await insertNewUser({
      name, lastName, motherLastName, username, password
    })
  })
  ipcMain.handle('user:update-user', async (_, { idUser, token, name, lastName, motherLastName, username, password }) => {
    const id = filterAdmin({ token })
    if (!id) return false

    return await updateUser({
      idUser, name, lastName, motherLastName, username, password
    })
  })
}

module.exports = { triggerEventsUser }
