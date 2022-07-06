const { contextBridge, ipcRenderer } = require('electron')

const channelsUser = require('./common/channelsUser')
const channelsDebtor = require('./common/channelsDebtor')
const channelsDebt = require('./common/channelsDebt')
const channelsLogin = require('./common/channelsLogin')
const channelsInitial = require('./common/channelsInitial')

const validChannels = [
  ...channelsUser, ...channelsDebtor, ...channelsDebt,
  ...channelsLogin, ...channelsInitial
]

contextBridge.exposeInMainWorld(
  'electron', {
    invoke: (channel, data) => {
      if (validChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, data)
      }
      return false
    },
    removeAllListeners: (channel) => {
      if (validChannels.includes(channel)) {
        ipcRenderer.removeAllListeners(channel)
      }
    }
  }
)
