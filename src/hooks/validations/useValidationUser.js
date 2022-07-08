import { notifyInfo } from '../../consts/notifications'
import { isObjectValuesNull, validateLength } from '../../services/validations/generalValidations'

const useValidationUser = () => {
  const rules = {
    name: {
      min: 2,
      max: 45
    },
    lastName: {
      min: 2,
      max: 45
    },
    motherLastName: {
      min: 2,
      max: 45
    },
    username: {
      min: 6,
      max: 150
    },
    password: {
      min: 6,
      max: 150
    }
  }

  const validateCreateUser = ({ evt }) => {
    const dataString = {
      name: {
        name: 'Nombre',
        minLength: rules.name.min,
        maxLength: rules.name.max,
        value: evt.target[0].value
      },
      lastName: {
        name: 'Apellido Paterno',
        minLength: rules.lastName.min,
        maxLength: rules.lastName.max,
        value: evt.target[1].value
      },
      motherLastName: {
        name: 'Apellido Materno',
        minLength: rules.motherLastName.min,
        maxLength: rules.motherLastName.max,
        value: evt.target[2].value
      },
      username: {
        name: 'Usuario',
        minLength: rules.username.min,
        maxLength: rules.username.max,
        value: evt.target[3].value
      },
      password: {
        name: 'Contraseña',
        minLength: rules.password.min,
        maxLength: rules.password.max,
        value: evt.target[4].value
      }
    }

    if (isObjectValuesNull(dataString)) return false
    if (!validateLength(dataString)) return false

    return true
  }
  const validateUpdateUser = ({ evt }) => {
    const isChangedPassword = evt.target[4].value === 'true'

    const dataString = {
      name: {
        name: 'Nombre',
        minLength: rules.name.min,
        maxLength: rules.name.max,
        value: evt.target[0].value
      },
      lastName: {
        name: 'Apellido Paterno',
        minLength: rules.lastName.min,
        maxLength: rules.lastName.max,
        value: evt.target[1].value
      },
      motherLastName: {
        name: 'Apellido Materno',
        minLength: rules.motherLastName.min,
        maxLength: rules.motherLastName.max,
        value: evt.target[2].value
      },
      username: {
        name: 'Usuario',
        minLength: rules.username.min,
        maxLength: rules.username.max,
        value: evt.target[3].value
      }
    }

    if (isChangedPassword) {
      dataString.password = {
        name: 'Contraseña',
        minLength: rules.password.min,
        maxLength: rules.password.max,
        value: evt.target[5].value
      }
    }

    if (isObjectValuesNull(dataString)) return false
    if (!validateLength(dataString)) return false
    if (isChangedPassword) {
      if (dataString.password.value !== evt.target[6].value) {
        notifyInfo('Las contraseñas no coinciden')
        return false
      }
    }

    return true
  }

  return {
    validateCreateUser, validateUpdateUser
  }
}

export default useValidationUser
