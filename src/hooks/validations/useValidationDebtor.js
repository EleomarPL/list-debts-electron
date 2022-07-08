import { isObjectValuesNull, validateLength } from '../../services/validations/generalValidations'

const useValidationDebtor = () => {
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
    address: {
      min: 2,
      max: 150
    }
  }

  const validateCreateDebtor = ({ evt }) => {
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
      address: {
        name: 'Dirección',
        minLength: rules.address.min,
        maxLength: rules.address.max,
        value: evt.target[3].value
      }
    }

    if (isObjectValuesNull(dataString)) return false
    if (!validateLength(dataString)) return false

    return true
  }
  const validateUpdateDebtor = ({ evt }) => {
    const dataString = {
      address: {
        name: 'Dirección',
        minLength: rules.address.min,
        maxLength: rules.address.max,
        value: evt.target[0].value
      }
    }

    if (isObjectValuesNull(dataString)) return false
    if (!validateLength(dataString)) return false

    return true
  }

  return {
    validateCreateDebtor, validateUpdateDebtor
  }
}

export default useValidationDebtor
