import { useState } from 'react'
import DeleteButton from '../buttons/DeleteButton'

import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import PersonalizedTable from '../common/PersonalizedTable'
import TitlePage from '../common/TitlePage'
import InputSelectDebtor from './InputSelectDebtor'

const AddDebt = () => {
  const [listDebts, setListDebts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleAddPosibleDebt = (evt) => {
    evt.preventDefault()
  }
  const handleSaveDebts = () => {
    setIsLoading(true)
  }
  const handleDeleteArticle = (index) => {

  }

  return (
    <>
      <TitlePage>Agregar Deuda</TitlePage>
      <div className="col-md-12">
        <InputSelectDebtor />
        <div className="row">
          <section className="col-md-4">
            <form className="w-100" onSubmit={ handleAddPosibleDebt }>
              <div className="mb-3 w-100">
                <label htmlFor="article" className="form-label">Articulo</label>
                <input type="text" className="form-control"
                  id="article" autoFocus={ true }
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="description" className="form-label">Descripcion</label>
                <textarea type="text" className="form-control"
                  id="description" autoFocus={ true }
                />
              </div>
              <div className="mb-3 w-100">
                <label htmlFor="total" className="form-label">Total</label>
                <input type="number" className="form-control"
                  id="total" autoFocus={ true }
                />
              </div>
              <PrimaryButton
                classNameIcon="bi bi-file-plus"
                className="w-75"
              >
                Agregar
              </PrimaryButton>
            </form>
          </section>
          <section className="col-md-8">
            <div className="d-flex justify-content-center mb-2 ">
              <SecondaryButton
                classNameIcon="bi bi-save"
                isLoading={ isLoading }
                onClick={ handleSaveDebts }
                disabled={ listDebts.length === 0 }
              >
                Guardar
              </SecondaryButton>
            </div>
            <PersonalizedTable>
              <thead>
                <tr>
                  <th>Articulo</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                { listDebts &&
                  listDebts.map((debt, index) => (
                    <tr key={ index }>
                      <td>{ debt.article }</td>
                      <td>{ debt.total }</td>
                      <td>
                        <DeleteButton
                          onClick={ () => handleDeleteArticle(index) }
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </PersonalizedTable>
          </section>
        </div>

      </div>
    </>
  )
}

export default AddDebt
