const { connect } = require('mongoose')

const stringConnection = process.env.MONGO_STRING_CONNECTION

connect(stringConnection)
  .then(() => {
    console.log('connection success')
  }).catch(() => {
    console.log('connection error')
  })
