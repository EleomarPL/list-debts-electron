import { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

import PersonalizedTable from '../common/PersonalizedTable'
import TitlePage from '../common/TitlePage'
import InputSelectDebtor from './InputSelectDebtor'

const PayDebt = () => {
  const [listDebts, setListDebts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeValueRadio = ({ id }) => {
    const indexValue = listDebts.findIndex(debt => debt.id === id)

    if (indexValue !== -1) {
      setListDebts(listDebts.map((value, index) => {
        if (index === indexValue) {
          return { ...value, box: !value.box }
        }
        return { ...value }
      }))
    }
  }

  const handlePayDebts = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
  }

  return (
    <>
      <TitlePage>Pagar Deuda</TitlePage>
      <InputSelectDebtor />
      <div className="row col-md-12">
        <section className="col-md-8">
          <PersonalizedTable>
            <thead>
              <tr>
                <th>Cobrar</th>
                <th>Articulo</th>
                <th>Descripcion</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              { listDebts.map(debt => (
                <tr key={ debt.id }>
                  <td>
                    <input type="checkbox"
                      className="form-check-input"
                      checked={ debt.box }
                      onChange={ () => {} }
                      onClick={ () => handleChangeValueRadio({ id: debt.id }) }
                    />
                  </td>
                  <td>{ debt.article }</td>
                  <td>{ debt.description }</td>
                  <td>{ debt.total }</td>
                </tr>
              )) }
            </tbody>
          </PersonalizedTable>
        </section>
        <section className="col-md-4">
          <form className="w-100" onSubmit={ handlePayDebts }>
            <span style={ { fontSize: '2.4rem' } }
              className="m-auto"
            >
              Total: <strong>100.00</strong>
            </span>
            <div className="mb-3 w-100">
              <label htmlFor="pay" className="form-label">Pago</label>
              <input type="number" className="form-control"
                id="pay" autoFocus={ true }
              />
            </div>
            <div className="mb-3 w-100">
              <label htmlFor="exchange" className="form-label">Cambio</label>
              <input type="number" className="form-control"
                id="exchange" autoFocus={ true }
              />
            </div>
            <PrimaryButton
              classNameIcon="bi bi-file-plus"
              className="w-100"
              isLoading={ isLoading }
            >
              Pagar
            </PrimaryButton>
          </form>
        </section>
      </div>
    </>
  )
}

export default PayDebt
