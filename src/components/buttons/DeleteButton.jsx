import PropTypes from 'prop-types'
import Icon from '../common/Icon'

const DeleteButton = ({ onClick }) => {
  return (
    <button type="button"
      className="btn btn-danger w-100"
      onClick={ onClick }
    >
      <Icon className="bi bi-trash" />
      <span className="visually-hidden">Eliminar</span>
    </button>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteButton
