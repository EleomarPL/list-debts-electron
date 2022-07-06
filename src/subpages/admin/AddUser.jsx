import { useEffect, useRef, useState } from 'react'

import PrimaryButton from '../../components/buttons/PrimaryButton'
import PersonalizedTable from '../../components/common/PersonalizedTable'
import TitlePage from '../../components/common/TitlePage'
import useUser from '../../hooks/useUser'
import ModalModifyUser, { openModalModifyUser } from '../../components/modals/ModalModifyUser'
import ModifyButton from '../../components/buttons/ModifyButton'

const AddUser = () => {
  const [listUsers, setListUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dataUser, setDataUser] = useState({})
  const formRef = useRef({})

  const { getUsers, insertUser } = useUser()

  useEffect(() => {
    getUsers().then(res => {
      if (res) setListUsers(res)
    })
  }, [])

  const handleAddUser = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
    insertUser({
      name: evt.target[0].value,
      lastName: evt.target[1].value,
      motherLastName: evt.target[2].value,
      username: evt.target[3].value,
      password: evt.target[4].value
    }).then(res => {
      setIsLoading(false)
      if (res) {
        formRef.current.reset()
        setListUsers([res, ...listUsers])
      }
    })
  }
  const handleOpenModal = (user) => {
    setDataUser(user)
    openModalModifyUser()
  }

  return (
    <>
      <TitlePage>Agregar Usuario</TitlePage>
      <div className="row col-md-12">
        <section className="col-md-2">
          <form className="w-100" onSubmit={ handleAddUser }
            ref={ formRef }
          >
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
                <th>Modificar</th>
              </tr>
            </thead>
            <tbody>
              { listUsers.map(user => (
                <tr key={ user.id }>
                  <td>{ user.name }</td>
                  <td>{ user.lastName }</td>
                  <td>{ user.motherLastName }</td>
                  <td>{ user.username }</td>
                  <td>
                    <ModifyButton
                      onClick={ () => handleOpenModal(user) }
                    />
                  </td>
                </tr>
              )) }
            </tbody>
          </PersonalizedTable>
        </section>
      </div>
      <ModalModifyUser
        dataUser={ dataUser }
        listUsers={ listUsers }
        setListUsers={ setListUsers }
      />
    </>
  )
}

export default AddUser
