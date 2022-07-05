import { Modal } from 'bootstrap'
import { useState } from 'react'

import PrimaryButton from '../buttons/PrimaryButton'
import ComponentGrouper from '../common/ComponentGrouper'

export const openModalCreateAdmin = () => {
  const modalTecnologico = new Modal(
    document.getElementById('ModalCreateAdmin'), {
      keyboard: true,
      focus: true
    }
  )
  modalTecnologico.show()
}

const ModalCreateAdmin = () => {
  const [isLoading, setIsLoading] = useState()

  const handleCreateAdmin = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
  }

  return (
    <div className="modal fade" id="ModalCreateAdmin"
      data-bs-backdrop="static" data-bs-keyboard="false"
      tabIndex="-1" aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={ { backgroundColor: 'var(--bg-primary)' } }>
          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">
              Crear Administrador
            </h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"
            >
            </button>
          </div>
          <form className="modal-body" onSubmit={ handleCreateAdmin }>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control"
                id="name"
              />
            </div>
            <ComponentGrouper nRow={ 2 } nSpace={ 1 }>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Apellido Paterno
                </label>
                <input type="text" className="form-control"
                  id="lastname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="motherlastname" className="form-label">
                  Apellido Materno
                </label>
                <input type="text" className="form-control"
                  id="motherlastname"
                />
              </div>
            </ComponentGrouper>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Usuario
              </label>
              <input type="text" className="form-control"
                id="username"
              />
            </div>
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
            <PrimaryButton className="w-100"
               isLoading={ isLoading }
               classNameIcon="bi bi-person-plus"
            >
              Crear
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateAdmin
