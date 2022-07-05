import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import SpinnerLoadingButton from '../common/SpinnerLoadingButton'

const PrimaryButton = ({ children, className, isLoading, classNameIcon }) => {
  return (
    <button className={ `btn btn-primary ${className}` }
      type="submit" disabled={ isLoading }
    >
      { isLoading && <SpinnerLoadingButton /> }
      <Icon className={ classNameIcon } />
      { children }
    </button>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  classNameIcon: PropTypes.string
}

export default PrimaryButton
