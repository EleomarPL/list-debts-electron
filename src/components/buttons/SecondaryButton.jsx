import PropTypes from 'prop-types'
import Icon from '../common/Icon'
import SpinnerLoadingButton from '../common/SpinnerLoadingButton'

const SecondaryButton = ({ children, className, isLoading, classNameIcon, onClick, disabled }) => {
  return (
    <button className={ `btn btn-primary ${className}` }
      type="button" disabled={ isLoading || disabled }
      onClick={ onClick }
    >
      { isLoading && <SpinnerLoadingButton /> }
      <Icon className={ classNameIcon } />
      { children }
    </button>
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  classNameIcon: PropTypes.string,
  disabled: PropTypes.bool.isRequired
}

export default SecondaryButton
