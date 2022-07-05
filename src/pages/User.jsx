import { Routes, Route } from 'react-router-dom'

import UserLayout from '../components/layouts/UserLayout'

import AddDebt from '../components/views/AddDebt'
import AddDebtor from '../components/views/AddDebtor'
import PayDebt from './components/views/PayDebt'

const User = () => {
  return (
    <Routes>
      <Route element={ <UserLayout /> }>
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
      </Route>
    </Routes>
  )
}

export default User
