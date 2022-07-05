import { Routes, Route } from 'react-router-dom'

import AdminLayout from '../components/layouts/AdminLayout'

import AddDebt from '../subpages/admin/AddDebt'
import AddDebtor from '../components/views/AddDebtor'
import AddUser from '../subpages/admin/AddUser'
import PayDebt from '../subpages/admin/PayDebt'
import ShowPays from '../subpages/admin/ShowPays'

const Admin = () => {
  return (
    <Routes>
      <Route element={ <AdminLayout /> }>
        <Route index
          element={
            <>
              <PayDebt />
            </>
          }
        />
        <Route path="add-debtor"
          element={
            <>
              <AddDebtor />
            </>
          }
        />
        <Route path="add-debt"
          element={
            <>
              <AddDebt />
            </>
          }
        />
        <Route path="show-pays"
          element={
            <>
              <ShowPays />
            </>
          }
        />
        <Route path="add-user"
          element={
            <>
              <AddUser />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default Admin
