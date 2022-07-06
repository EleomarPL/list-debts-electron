import PropTypes from 'prop-types'
import { Modal } from 'bootstrap'
import { useEffect, useRef, useState } from 'react'

import PrimaryButton from '../buttons/PrimaryButton'
import ComponentGrouper from '../common/ComponentGrouper'
import useUser from '../../hooks/useUser'
import { updateArray } from '../../utils/updateArray'

export const openModalModifyUser = () => {
  const modalTecnologico = new Modal(
    document.getElementById('ModalModifyUser'), {
      keyboard: true,
      focus: true
    }
  )
  modalTecnologico.show()
}

const ModalModifyUser = ({ dataUser, listUsers, setListUsers }) => {
  const [isLoading, setIsLoading] = useState()
  const [isModifyPassword, setIsModifyPassword] = useState(false)

  const inputNameRef = useRef({})
  const inputLastNameRef = useRef({})
  const inputMotherLastNameRef = useRef({})
  const inputUsernameRef = useRef({})
  const { updateUser } = useUser()

  useEffect(() => {
    inputNameRef.current.value = dataUser.name
    inputLastNameRef.current.value = dataUser.lastName
    inputMotherLastNameRef.current.value = dataUser.motherLastName
    inputUsernameRef.current.value = dataUser.username
  }, [dataUser])

  const handleModifyUser = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
    updateUser({
      name: inputNameRef.current.value,
      lastName: inputLastNameRef.current.value,
      motherLastName: inputMotherLastNameRef.current.value,
      username: inputUsernameRef.current.value,
      password: evt.target[5]?.value,
      idUser: dataUser.id
    }).then(res => {
      setIsLoading(false)
      if (res) {
        const newArray = updateArray({
          array: listUsers,
          id: res.id,
          newData: res
        })
        setListUsers(newArray)

        const myModal = Modal.getInstance(document.getElementById('ModalModifyUser'))
        myModal.hide()
      }
    })
  }

  return (
    <div className="modal fade" id="ModalModifyUser"
      data-bs-backdrop="static" data-bs-keyboard="false"
      tabIndex="-1" aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={ { backgroundColor: 'var(--bg-primary)' } }>
          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">
              Modificar Usuario
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"
            >
            </button>
          </div>
          <form className="modal-body" onSubmit={ handleModifyUser }>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control"
                id="name" ref={ inputNameRef }
              />
            </div>
            <ComponentGrouper nRow={ 2 } nSpace={ 1 }>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Apellido Paterno
                </label>
                <input type="text" className="form-control"
                  id="lastname" ref={ inputLastNameRef }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="motherlastname" className="form-label">
                  Apellido Materno
                </label>
                <input type="text" className="form-control"
                  id="motherlastname" ref={ inputMotherLastNameRef }
                />
              </div>
            </ComponentGrouper>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Usuario
              </label>
              <input type="text" className="form-control"
                id="username" ref={ inputUsernameRef }
              />
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox"
                value={ isModifyPassword } id="check"
                onChange={ () => setIsModifyPassword(!isModifyPassword) }
              />
              <label className="form-check-label" htmlFor="check">
                Modificar Contraseña
              </label>
            </div>
            { isModifyPassword &&
              <ComponentGrouper nRow={ 2 } nSpace={ 1 }>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input type="password" className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input type="password" className="form-control"
                    id="confirmpassword"
                  />
                </div>
              </ComponentGrouper>
            }
            <PrimaryButton className="w-100"
               isLoading={ isLoading }
               classNameIcon="bi bi-pencil"
            >
              Modificar
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  )
}

ModalModifyUser.propTypes = {
  dataUser: PropTypes.object.isRequired,
  listUsers: PropTypes.array.isRequired,
  setListUsers: PropTypes.func.isRequired
}

export default ModalModifyUser
