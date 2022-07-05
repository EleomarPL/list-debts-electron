import { Outlet } from 'react-router-dom'

import { navbarUser } from '../../consts/navbarUser'
import Header from '../views/Header'

const UserLayout = () => {
  return (
    <>
      <Header listNavbar={ navbarUser } />
      <main className="container-fluid">
        <Outlet />
      </main>
    </>
  )
}

export default UserLayout
