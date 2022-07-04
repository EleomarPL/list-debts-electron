const { app, BrowserWindow } = require('electron')
require('dotenv').config({ path: '../.env' })

require('./connection')

function createWindow () {
  const createMainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true
    }
  })

  // createMainWindow.loadFile('index.html')
  createMainWindow.maximize()
  createMainWindow.loadURL('http://localhost:3000')
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
