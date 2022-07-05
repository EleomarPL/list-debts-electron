const { connect } = require('mongoose')

const stringConnection = 'mongodb://localhost:27017/listdebts'

connect(stringConnection)
  .then(() => {
    console.log('connection success')
  }).catch(() => {
    console.log('connection error')
  })
