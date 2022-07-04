const bcrypt = require('bcrypt')

const User = require('../models/User')
const handleErrors = require('../utils/handleErrors')

const initialInsertAdmin = async ({
  name, lastName, motherLastName, username, password
}) => {
  try {
    if (!(name && lastName && motherLastName && username && password)) {
      throw new Error('allParametersRequired')
    }

    const searchAdmin = await User.findOne({ type: 0 })
    if (searchAdmin) throw new Error('adminAlreadyExists')

    const passwordHash = await bcrypt.hash(password, 10)
    const newAdmin = new User({
      type: 0,
      name,
      lastName,
      motherLastName,
      username,
      password: passwordHash,
      date: new Date()
    })

    const savedUser = await newAdmin.save()
    return savedUser
  } catch (error) {
    return handleErrors({ error })
  }
}

const insertNewUser = async ({
  name, lastName, motherLastName, username, password
}) => {
  try {
    if (!(name && lastName && motherLastName && username && password)) {
      throw new Error('allParametersRequired')
    }
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({
      type: 1,
      name,
      lastName,
      motherLastName,
      username,
      password: passwordHash,
      date: new Date()
    })

    const savedUser = await newUser.save()
    return savedUser
  } catch (error) {
    return handleErrors({ error })
  }
}

const updateUser = async ({
  idUser, name, lastName, motherLastName, username, password
}) => {
  try {
    if (!(name && lastName && motherLastName && username && password)) {
      throw new Error('allParametersRequired')
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const editUser = {
      name,
      lastName,
      motherLastName,
      username,
      password: passwordHash
    }

    const savedCHangeUser = await User.findByIdAndUpdate(idUser, editUser, { new: true })
    return savedCHangeUser
  } catch (error) {
    return handleErrors({ error })
  }
}

module.exports = {
  initialInsertAdmin,
  insertNewUser,
  updateUser
}
