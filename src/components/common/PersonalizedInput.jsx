import PropTypes from 'prop-types'
import Icon from './Icon'

const PersonalizedInput = ({ className, placeholder, type }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id={ className }>
        <Icon className={ className } spaceRight={ true } />
      </span>
      <input type={ type } className="form-control"
        placeholder={ placeholder } aria-label={ className }
        aria-describedby={ className }
      />
    </div>
  )
}

PersonalizedInput.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default PersonalizedInput
