import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import PrimaryButton from '../buttons/PrimaryButton'
import ModifyButton from '../buttons/ModifyButton'
import TitlePage from '../common/TitlePage'
import ModalModifyDebtor, { openModalModifyDebtor } from '../modals/ModalModifyDebtor'
import PersonalizedTable from '../common/PersonalizedTable'
import useDebtor from '../../hooks/useDebtor'

const AddDebtor = () => {
  const [listDebtors, setListDebtors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dataModal, setDataModal] = useState({
    idDebtor: '',
    address: ''
  })
  const formRef = useRef({})

  const user = useSelector(state => state.session.value)
  const { insertDebtor, getDebtors } = useDebtor()

  useEffect(() => {
    getDebtors().then(res => {
      if (res) setListDebtors(res)
    })
  }, [])

  const handleAddDebtor = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
    insertDebtor({
      name: evt.target[0].value,
      lastName: evt.target[1].value,
      motherLastName: evt.target[2].value,
      address: evt.target[3].value
    }).then(res => {
      setIsLoading(false)
      if (res) formRef.current.reset()
    })
  }

  const handleOpenModal = ({ idDebtor, address }) => {
    setDataModal({
      idDebtor, address
    })
    openModalModifyDebtor()
  }

  return (
    <>
      <TitlePage>Agregar Deudor</TitlePage>
      <div className="row col-md-12">
        <section className="col-md-2">
          <form className="w-100" onSubmit={ handleAddDebtor }
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
              <label htmlFor="address" className="form-label">Dirección</label>
              <textarea type="text" className="form-control"
                id="address"
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
                <th>Dirección</th>
                { user.type === 0 && <th>Modificar</th> }
              </tr>
            </thead>
            <tbody>
              { listDebtors &&
                listDebtors.map(debtor => (
                  <tr key={ debtor.id }>
                    <td>{ debtor.name }</td>
                    <td>{ debtor.lastName }</td>
                    <td>{ debtor.motherLastName }</td>
                    <td>{ debtor.address }</td>
                    { user.type === 0 &&
                      <td>
                        <ModifyButton
                          onClick={ () => handleOpenModal({ idDebtor: debtor.id, address: debtor.address }) }
                        />
                      </td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </PersonalizedTable>
        </section>
      </div>
      <ModalModifyDebtor
        idDebtor={ dataModal.idDebtor }
        address={ dataModal.address }
      />
    </>
  )
}

export default AddDebtor
