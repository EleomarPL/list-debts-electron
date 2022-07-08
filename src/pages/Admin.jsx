import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Suspense, lazy } from 'react'

import AdminLayout from '../components/layouts/AdminLayout'

const AddDebt = lazy(() => import('../components/views/AddDebt'))
const AddDebtor = lazy(() => import('../components/views/AddDebtor'))
const AddUser = lazy(() => import('../subpages/admin/AddUser'))
const PayDebt = lazy(() => import('../components/views/PayDebt'))
const ShowPays = lazy(() => import('../subpages/admin/ShowPays'))
const SpinnerLoadingPage = lazy(() => import('../components/common/SpinnerLoadingPage'))

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
              <Suspense fallback={ <SpinnerLoadingPage /> }>
                <PayDebt />
              </Suspense>
            </>
          }
        />
        <Route path="add-debtor"
          element={
            <>
              <Helmet>
                <title>Agregar Deudor</title>
              </Helmet>
              <Suspense fallback={ <SpinnerLoadingPage /> }>
                <AddDebtor />
              </Suspense>
            </>
          }
        />
        <Route path="add-debt"
          element={
            <>
              <Helmet>
                <title>Agregar Deuda</title>
              </Helmet>
              <Suspense fallback={ <SpinnerLoadingPage /> }>
                <AddDebt />
              </Suspense>
            </>
          }
        />
        <Route path="show-pays"
          element={
            <>
              <Helmet>
                <title>Mostrar Pagos de Deudas</title>
              </Helmet>
              <Suspense fallback={ <SpinnerLoadingPage /> }>
                <ShowPays />
              </Suspense>
            </>
          }
        />
        <Route path="add-user"
          element={
            <>
              <Helmet>
                <title>Agregar Usuario</title>
              </Helmet>
              <Suspense fallback={ <SpinnerLoadingPage /> }>
                <AddUser />
              </Suspense>
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default Admin
