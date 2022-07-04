import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = () => {
  const session = useSelector(state => state.session.value)

  const isAutenticate = !(session.type === undefined)

  if (isAutenticate) {
    if (session.type === 0) return <Navigate to="/admin" />
    if (session.type === 1) return <Navigate to="/user" />
  } else return <Outlet />
}

export default PublicRoute
