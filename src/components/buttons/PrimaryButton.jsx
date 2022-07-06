import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import SpinnerLoadingButton from '../common/SpinnerLoadingButton'

const PrimaryButton = ({ children, className, isLoading, classNameIcon, disabled = false }) => {
  return (
    <button className={ `btn btn-primary ${className}` }
      type="submit" disabled={ isLoading || disabled }
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
  isLoading: PropTypes.bool,
  classNameIcon: PropTypes.string,
  disabled: PropTypes.bool
}

export default PrimaryButton
