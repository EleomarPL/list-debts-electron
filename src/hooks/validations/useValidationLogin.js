import { isObjectValuesNull } from '../../services/validations/generalValidations'

const useValidationLogin = () => {
  const validateLogin = ({ evt }) => {
    const dataString = {
      username: {
        name: 'Usuario',
        value: evt.target[0].value
      },
      password: {
        name: 'Contraseña',
        value: evt.target[1].value
      }
    }

    if (isObjectValuesNull(dataString)) return false

    return true
  }

  return { validateLogin }
}

export default useValidationLogin
