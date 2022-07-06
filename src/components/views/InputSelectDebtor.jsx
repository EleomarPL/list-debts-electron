import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import SpinnerLoadingButton from '../common/SpinnerLoadingButton'
import useDebtor from '../../hooks/useDebtor'

const InputSelectDebtor = ({ debtor, setDebtor }) => {
  const [debtors, setDebtors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { getDebtors } = useDebtor()

  useEffect(() => {
    setIsLoading(true)
    getDebtors().then(res => {
      setIsLoading(false)
      if (res) setDebtors(res)
    })
  }, [])

  return (
    <div className="mb-3 d-flex align-items-center">
      { isLoading && <SpinnerLoadingButton /> }
      <label htmlFor="debt">Deudor: </label>
      <select className="form-select" aria-label="Selección de deudor"
        disabled={ isLoading } required
        id="debt" onChange={ evt => setDebtor(evt.target.value) }
        value={ debtor }
      >
        <option value="" hidden>Seleccione un deudor</option>
        { debtors &&
          debtors.map(debtor =>
            <option key={ debtor.id }
              value={ debtor.id }
            >
              { `${debtor.name} ${debtor.lastName} ${debtor.motherLastName}` }
            </option>
          )
        }
      </select>
    </div>
  )
}

InputSelectDebtor.propTypes = {
  debtor: PropTypes.string,
  setDebtor: PropTypes.func
}

export default InputSelectDebtor
