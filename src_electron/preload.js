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
    invoke: async (channel, data) => {
      if (validChannels.includes(channel)) {
        return await ipcRenderer.invoke(channel, data)
      }
    },
    removeAllListeners: (channel) => {
      if (validChannels.includes(channel)) {
        ipcRenderer.removeAllListeners(channel)
      }
    }
  }
)
