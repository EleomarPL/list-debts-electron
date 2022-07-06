import { useEffect, useState } from 'react'
import useDebt from '../../hooks/useDebt'
import PrimaryButton from '../buttons/PrimaryButton'

import PersonalizedTable from '../common/PersonalizedTable'
import TitlePage from '../common/TitlePage'
import InputSelectDebtor from './InputSelectDebtor'

const PayDebt = () => {
  const [listDebts, setListDebts] = useState([])
  const [debtor, setDebtor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [total, seTotal] = useState('')
  const [exChange, setExChange] = useState('')
  const [pay, setPay] = useState('')

  const { getDebtByDebtor, payDebts } = useDebt()

  useEffect(() => {
    if (debtor !== '') {
      getDebtByDebtor({ idDebtor: debtor }).then(res => {
        if (res) setListDebts(res)
      })
    }
  }, [debtor])
  useEffect(() => {
    seTotal(listDebts.reduce((total, debt) => {
      if (debt.box) {
        return total + debt.total
      }
      return total
    }, 0))
  }, [listDebts])
  useEffect(() => {
    if (listDebts.length === 0) setExChange(0)
    else if (Number(pay) === 0) setExChange(0)
    else if (Number(pay) < total) setExChange(0)
    else setExChange(Number(pay) - total)
  }, [pay])

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
    payDebts({
      listDebts
    }).then(res => {
      setIsLoading(false)
      if (res) {
        setListDebts(listDebts.filter(debt => !debt.box))
      }
    })
  }

  return (
    <>
      <TitlePage>Pagar Deuda</TitlePage>
      <InputSelectDebtor
        debtor={ debtor }
        setDebtor={ setDebtor }
      />
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
              Total: <strong>{ total }</strong>
            </span>
            <div className="mb-3 w-100">
              <label htmlFor="pay" className="form-label">Pago</label>
              <input type="number" className="form-control"
                id="pay" autoFocus={ true }
                value={ pay }
                onChange={ evt => setPay(evt.target.value) }
              />
            </div>
            <div className="mb-3 w-100">
              <label htmlFor="exchange" className="form-label">Cambio</label>
              <input type="number" className="form-control"
                id="exchange" autoFocus={ true }
                value={ exChange } disabled
              />
            </div>
            <PrimaryButton
              classNameIcon="bi bi-file-plus"
              className="w-100"
              isLoading={ isLoading }
              disabled={ listDebts === 0 || total === 0 || Number(pay) < total }
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
