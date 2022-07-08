import { Modal } from 'bootstrap'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

import PrimaryButton from '../buttons/PrimaryButton'
import useDebtor from '../../hooks/useDebtor'
import { updateArray } from '../../utils/updateArray'
import useValidationDebtor from '../../hooks/validations/useValidationDebtor'

export const openModalModifyDebtor = () => {
  const modalTecnologico = new Modal(
    document.getElementById('ModalModifyDebtor'), {
      keyboard: true,
      focus: true
    }
  )
  modalTecnologico.show()
}

const ModalModifyDebtor = ({ idDebtor, address, listDebtors, setListDebtors }) => {
  const [isLoading, setIsLoading] = useState(false)
  const inputAddressRef = useRef({})

  const { updateDebtor } = useDebtor()
  const { validateUpdateDebtor } = useValidationDebtor()

  const handleModifyDebtor = (evt) => {
    evt.preventDefault()
    if (validateUpdateDebtor({ evt })) {
      setIsLoading(true)

      updateDebtor({
        idDebtor,
        address: evt.target[0].value
      }).then(res => {
        setIsLoading(false)
        if (res) {
          const newArray = updateArray({
            array: listDebtors,
            id: res.id,
            newData: res
          })
          setListDebtors(newArray)
          const myModal = Modal.getInstance(document.getElementById('ModalModifyDebtor'))
          myModal.hide()
        }
      })
    }
  }

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
          <form className="modal-body" onSubmit={ handleModifyDebtor }>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="address">Dirección</label>
              <textarea className="form-control"
                id="address" required
                ref={ inputAddressRef }
              />
            </div>
            <PrimaryButton
              className="w-100"
              isLoading={ isLoading }
              classNameIcon="bi bi-pencil-fill"
            >
              Modificar
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  )
}

ModalModifyDebtor.propTypes = {
  idDebtor: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  listDebtors: PropTypes.array.isRequired,
  setListDebtors: PropTypes.func.isRequired
}

export default ModalModifyDebtor
