import { useState } from 'react'

import PrimaryButton from '../../components/buttons/PrimaryButton'
import PersonalizedTable from '../../components/common/PersonalizedTable'
import TitlePage from '../../components/common/TitlePage'

const AddUser = () => {
  const [listUsers, setListUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleAddUser = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
  }

  return (
    <>
      <TitlePage>Agregar Usuario</TitlePage>
      <div className="row col-md-12">
        <section className="col-md-2">
          <form className="w-100" onSubmit={ handleAddUser }>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control"
                id="name" autoFocus={ true }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Apellido Paterno</label>
              <input type="text" className="form-control"
                id="lastname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="motherlastname" className="form-label">Apellido Materno</label>
              <input type="text" className="form-control"
                id="motherlastname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Usuario</label>
              <input type="text" className="form-control"
                id="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control"
                id="password"
              />
            </div>
            <PrimaryButton isLoading={ isLoading }
              classNameIcon="bi bi-person-fill"
              className="w-100"
            >
              Agregar
            </PrimaryButton>
          </form>
        </section>
        <section className="col-md-10">
          <PersonalizedTable className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              { listUsers.map(user => (
                <tr key={ user.id }>
                  <td>{ user.name }</td>
                  <td>{ user.lastName }</td>
                  <td>{ user.motherLastName }</td>
                  <td>{ user.username }</td>
                </tr>
              )) }
            </tbody>
          </PersonalizedTable>
        </section>
      </div>
    </>
  )
}

export default AddUser
