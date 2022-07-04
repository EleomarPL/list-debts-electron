const CONVERT_ERROR = {
  default: () => ({ message: 'Error' }),
  adminAlreadyExists: () => ({ message: 'Admin already exists' }),
  allParametersRequired: () => ({ message: 'All parameters required' }),
  ValidationError: () => ({ message: 'Validation error' }),
  MongoError: () => ({ message: 'Error in connection to mongo' }),
  JsonWebTokenError: () => ({ message: 'Error in jwt' })
}

const handleErrors = ({ error }) => {
  const nameError = error.name
  const messageError = error.message
  const errorConvert = CONVERT_ERROR[nameError] || CONVERT_ERROR[messageError] || CONVERT_ERROR.default

  const errorMessage = errorConvert()
  return { ...errorMessage, error: true }
}

module.exports = handleErrors
