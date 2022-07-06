import PropTypes from 'prop-types'
import Icon from '../common/Icon'

const ModifyButton = ({ onClick }) => {
  return (
    <button type="button"
      className="btn btn-secondary w-100"
      onClick={ onClick }
    >
      <Icon className="bi bi-pencil" />
      <span className="visually-hidden">Modificar</span>
    </button>
  )
}

ModifyButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ModifyButton
