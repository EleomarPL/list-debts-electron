import { Modal } from 'bootstrap'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

export const openModalModifyDebtor = () => {
  const modalTecnologico = new Modal(
    document.getElementById('ModalModifyDebtor'), {
      keyboard: true,
      focus: true
    }
  )
  modalTecnologico.show()
}

const ModalModifyDebtor = ({ idDebtor, address }) => {
  const inputAddressRef = useRef({})

  useEffect(() => {
    inputAddressRef.current.value = address
  }, [address])

  return (
    <div className="modal fade" id="ModalModifyDebtor"
      data-bs-backdrop="static" data-bs-keyboard="false"
      tabIndex="-1" aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={ { backgroundColor: 'var(--bg-primary)' } }>
          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="staticBackdropLabel">Modificar</h5>
            <button type="button" className="btn-close"
              data-bs-dismiss="modal" aria-label="Close"
            >
            </button>
          </div>
          <form className="modal-body" onSubmit={ () => {} }>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="address">Dirección</label>
              <textarea className="form-control"
                id="address" required
                ref={ inputAddressRef }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ModalModifyDebtor.propTypes = {
  idDebtor: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default ModalModifyDebtor
