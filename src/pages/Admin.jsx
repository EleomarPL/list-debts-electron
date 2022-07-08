import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import AdminLayout from '../components/layouts/AdminLayout'

import AddDebt from '../components/views/AddDebt'
import AddDebtor from '../components/views/AddDebtor'
import AddUser from '../subpages/admin/AddUser'
import PayDebt from '../components/views/PayDebt'
import ShowPays from '../subpages/admin/ShowPays'

const Admin = () => {
  return (
    <Routes>
      <Route element={ <AdminLayout /> }>
        <Route index
          element={
            <>
              <Helmet>
                <title>Pagar Deuda</title>
              </Helmet>
              <PayDebt />
            </>
          }
        />
        <Route path="add-debtor"
          element={
            <>
              <Helmet>
                <title>Agregar Deudor</title>
              </Helmet>
              <AddDebtor />
            </>
          }
        />
        <Route path="add-debt"
          element={
            <>
              <Helmet>
                <title>Agregar Deuda</title>
              </Helmet>
              <AddDebt />
            </>
          }
        />
        <Route path="show-pays"
          element={
            <>
              <Helmet>
                <title>Mostrar Pagos de Deudas</title>
              </Helmet>
              <ShowPays />
            </>
          }
        />
        <Route path="add-user"
          element={
            <>
              <Helmet>
                <title>Agregar Usuario</title>
              </Helmet>
              <AddUser />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default Admin
