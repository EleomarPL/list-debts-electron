import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
  const session = useSelector(state => state.session.value)

  const isAutenticate = !(session.type === undefined)

  if (isAutenticate) {
    if (session.type === 0) return <Outlet />
    if (session.type === 1) return <Navigate to="/user" />
  } else return <Navigate to="/" />
}

export default AdminRoute
