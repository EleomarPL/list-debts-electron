import { Outlet } from 'react-router-dom'

import { navbarAdmin } from '../../consts/navbarAdmin'
import Header from '../views/Header'

const AdminLayout = () => {
  return (
    <>
      <Header listNavbar={ navbarAdmin } />
      <main className="container-fluid">
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
