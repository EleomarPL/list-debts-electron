import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../../features/sessionReducer'
import Icon from '../common/Icon'

const DropdownMenuUser = () => {
  const session = useSelector(state => state.session.value)
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <div className="dropdown">
      <button
        className="text-truncate border-0 bg-transparent dropdown-toggle"
        type="button" id="menu-dropdown"
        data-bs-toggle="dropdown" aria-expanded="false"
        style={ { color: 'var(--text-primary)' } }
      >
        <span className="text-truncate">
          { `${session.name} ${session.lastName}` }
        </span>
        <Icon
          className="bi bi-person"
          spaceLeft={ true }
          spaceRight={ false }
        />
      </button>
      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="menu-dropdown">
        <div className="card m-1" style={ { width: '300px' } }>
          <div className="card-body">
            <div className="text-center text-uppercase">
              <p className="m-0">Usuario: </p>
              <p className="mb-0 font-weight-bold mt-2">
                { `${session.name} ${session.lastName} ${session.motherLastName}` }
              </p>
            </div>
            <div className="dropdown-divider"></div>
            <div className="text-center">
              <p className="m-0">Tipo: </p>
              <p className="m-0 text-uppercase">
                { session.type === 0 ? 'Administrador' : 'Usuario' }
              </p>
            </div>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item btn btn-light btn-sm btn-block dropdown-item" type="button"
          onClick={ handleLogout }
        >
          <i className="bi bi-power text-danger" style={ { marginRight: '5px' } } />
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default DropdownMenuUser
