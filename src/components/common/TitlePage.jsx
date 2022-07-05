import PropTypes from 'prop-types'

const TitlePage = ({ children }) => {
  return (
    <h1 style={ { fontSize: '1.7rem' } }
      className="text-center mb-4 mt-3"
    >
      { children }
    </h1>
  )
}

TitlePage.propTypes = {
  children: PropTypes.node.isRequired
}

export default TitlePage
