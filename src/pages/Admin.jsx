import { Routes, Route } from 'react-router-dom'

import AdminLayout from '../components/layouts/AdminLayout'

import AddDebt from '../subpages/admin/AddDebt'
import AddDebtor from '../subpages/admin/AddDebtor'
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
      </Route>
    </Routes>
  )
}

export default Admin