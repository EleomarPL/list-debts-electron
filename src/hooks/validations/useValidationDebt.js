import { isNumberValue, isObjectValuesNull, validateLength } from '../../services/validations/generalValidations'

const useValidationDebt = () => {
  const rules = {
    article: {
      min: 2,
      max: 45
    },
    description: {
      min: 2,
      max: 150
    }
  }
  const validateAddDebt = ({ evt }) => {
    const dataString = {
      article: {
        name: 'Artículo',
        minLength: rules.article.min,
        maxLength: rules.article.max,
        value: evt.target[0].value
      },
      description: {
        name: 'Descripción',
        minLength: rules.description.min,
        maxLength: rules.description.max,
        value: evt.target[1].value
      }
    }

    if (isObjectValuesNull(dataString)) return false
    if (!validateLength(dataString)) return false
    if (!isNumberValue({
      name: 'Monto',
      value: evt.target[2].value
    })) return false

    return true
  }

  return { validateAddDebt }
}

export default useValidationDebt
