// const path = require('path')

const configWindows = {
  name: 'control_de_deudas'
  // iconUrl: path.join(__dirname, 'assets', 'favicon.ico'),
  // setupIcon: path.join(__dirname, 'assets', 'favicon.ico')
}

const configLinux = {
  options: {
    // icon: path.join(__dirname, 'assets', 'logo.png'),
    maintainer: 'Eleomar Pedro Lorenzo',
    homepage: 'https://github.com/EleomarPL/list-debts-electron',
    version: '0.0.1',
    productName: 'List Debts',
    executableName: 'list-debts'
  }
}

module.exports = {
  packagerConfig: {
    // icon: path.join(__dirname, 'assets', 'favicon.ico') // Windows
    // icon: path.join(__dirname, 'assets', 'logo.png') //Linux

  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: configWindows
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin'
      ]
    },
    {
      name: '@electron-forge/maker-deb',
      config: configLinux
    },
    {
      name: '@electron-forge/maker-rpm',
      config: configLinux
    }
  ]
}
