const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

Menu.setApplicationMenu(null)

require('dotenv').config({ path: path.join(__dirname, '../.env') })
require('./connection')

const { triggerEventsInitital } = require('./evtContextBridge/inititalOperation')
const { triggerEventsLogin } = require('./evtContextBridge/loginOperation')
const { triggerEventsDebtor } = require('./evtContextBridge/debtorOperation')
const { triggerEventsUser } = require('./evtContextBridge/userOperation')
const { triggerEventsDebt } = require('./evtContextBridge/debtOperation')
const { triggerEventsRegisterPays } = require('./evtContextBridge/registerPayOperation')

function createWindow () {
  const createMainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  createMainWindow.loadFile(path.join(__dirname, 'app', 'index.html'))
  // createMainWindow.loadURL('http://localhost:3000')
  createMainWindow.maximize()

  triggerEventsInitital()
  triggerEventsLogin()
  triggerEventsDebtor()
  triggerEventsUser()
  triggerEventsDebt()
  triggerEventsRegisterPays()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
