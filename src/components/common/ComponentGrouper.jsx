import PropTypes from 'prop-types'

const ComponentGrouper = ({ nRow, nSpace, children }) => {
  return (
    <div
      className={ `row row-cols-lg-${nRow} g-${nSpace}` }
    >
      { children }
    </div>
  )
}

ComponentGrouper.propTypes = {
  nRow: PropTypes.number.isRequired,
  nSpace: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default ComponentGrouper
