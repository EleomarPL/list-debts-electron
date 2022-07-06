const jwt = require('jsonwebtoken')

const stractorToken = ({ token }) => {
  if (!token) return false
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (e) {
    return false
  }
}

const filterAdmin = ({ token }) => {
  try {
    const decodeToken = stractorToken({ token })
    if (!decodeToken) return false

    if (decodeToken.type !== 0) return false

    return decodeToken.id
  } catch (e) {
    return false
  }
}
const filterUser = ({ token }) => {
  try {
    const decodeToken = stractorToken({ token })
    if (!decodeToken) return false

    if (decodeToken.type !== 1) return false

    return decodeToken.id
  } catch (e) {
    return false
  }
}

module.exports = {
  filterAdmin, filterUser
}
