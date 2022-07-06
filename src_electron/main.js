const { app, BrowserWindow } = require('electron')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '../.env') })
require('./connection')

const { triggerEventsInitital } = require('./evtContextBridge/inititalOperation')
const { triggerEventsLogin } = require('./evtContextBridge/loginOperation')

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

  // createMainWindow.loadFile('index.html')
  createMainWindow.loadURL('http://localhost:3000')
  createMainWindow.maximize()

  triggerEventsInitital()
  triggerEventsLogin()
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
