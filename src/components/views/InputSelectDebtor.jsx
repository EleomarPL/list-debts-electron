import { useState } from 'react'

import SpinnerLoadingButton from '../common/SpinnerLoadingButton'

const InputSelectDebtor = () => {
  const [debtors, setDebtors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="mb-3 d-flex align-items-center">
      { isLoading && <SpinnerLoadingButton /> }
      <label htmlFor="debt">Deudor: </label>
      <select className="form-select" aria-label="Selección de deudor"
        disabled={ isLoading } required
        id="debt"
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

export default InputSelectDebtor
