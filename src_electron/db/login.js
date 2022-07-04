const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')

const login = async ({ username, password }) => {
  const findUser = await User.findOne({ username })
  const passwordUser = findUser === null
    ? false
    : await bcrypt.compare(password, findUser.password)

  if (!(passwordUser && findUser)) return false

  const dataUserForToken = {
    id: findUser._id,
    userName: findUser.userName,
    type: findUser.type
  }

  const token = jwt.sign(dataUserForToken, process.env.JWT_SECRET)
  return {
    name: findUser.name,
    type: findUser.type,
    lastName: findUser.lastName,
    motherLastName: findUser.motherLastName,
    username: findUser.userName,
    token
  }
}

module.exports = {
  login
}
