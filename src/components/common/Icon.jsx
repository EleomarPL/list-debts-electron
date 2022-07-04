import PropTypes from 'prop-types'

const Icon = ({ className, spaceLeft = false, spaceRight = true }) => {
  return (
    <i className={ className }
      style={ {
        paddingLeft: spaceLeft ? '5px' : '0',
        paddingRight: spaceRight ? '5px' : '0'
      } }
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  spaceLeft: PropTypes.bool,
  spaceRight: PropTypes.bool
}

export default Icon
