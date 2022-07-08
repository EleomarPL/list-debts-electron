import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'

import UserLayout from '../components/layouts/UserLayout'

import AddDebt from '../components/views/AddDebt'
import AddDebtor from '../components/views/AddDebtor'
import PayDebt from '../components/views/PayDebt'

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
      </Route>
    </Routes>
  )
}

export default User
