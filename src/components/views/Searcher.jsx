import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import Icon from '../common/Icon'
import { useEffect, useMemo } from 'react'

const Searcher = ({ setSearcher }) => {
  const handleChange = (event) => {
    setSearcher(event.target.value)
  }
  const handleDebouncer = useMemo(
    () => debounce(handleChange, 1000)
    , []
  )
  useEffect(() => {
    return () => {
      handleDebouncer.cancel()
    }
  }, [])

  return (
    <div className="d-flex align-items-center w-75 m-auto mb-4 pb-2">
      <label htmlFor="searcher">
        <Icon className="bi bi-search" />
        <span className="visually-hidden">Buscar:</span>
      </label>
      <input id="searcher"
        type="text"
        className="form-control"
        placeholder="Buscar"
        onChange={ handleDebouncer }
      />
    </div>
  )
}

Searcher.propTypes = {
  setSearcher: PropTypes.func.isRequired
}

export default Searcher
