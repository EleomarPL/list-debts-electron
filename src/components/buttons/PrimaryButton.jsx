import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import SpinnerLoadingButton from '../common/SpinnerLoadingButton'

const PrimaryButton = ({ children, className, isLoading }) => {
  return (
    <button className={ `btn btn-primary ${className}` }
      type="submit" disabled={ isLoading }
    >
      { isLoading && <SpinnerLoadingButton /> }
      <Icon className="bi bi-arrow-right-square-fill" />
      { children }
    </button>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
}

export default PrimaryButton
