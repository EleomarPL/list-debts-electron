import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import UserLayout from '../components/layouts/UserLayout'

const AddDebt = lazy(() => import('../components/views/AddDebt'))
const AddDebtor = lazy(() => import('../components/views/AddDebtor'))
const PayDebt = lazy(() => import('../components/views/PayDebt'))
const SpinnerLoadingPage = lazy(() => import('../components/common/SpinnerLoadingPage'))

const User = () => {
  return (
    <Routes>
      <Route element={ <UserLayout /> }>
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
      </Route>
    </Routes>
  )
}

export default User
