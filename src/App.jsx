import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/roboto'

import PublicRoute from './components/routers/PublicRoute'
import AdminRoute from './components/routers/AdminRoute'
import UserRoute from './components/routers/UserRoute'

import Index from './pages/Index'
import Admin from './pages/Admin'
import User from './pages/User'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <PublicRoute /> }>
          <Route index
            element={
              <>
                <Index />
              </>
            }
          />
        </Route>
        <Route path="admin" element={ <AdminRoute /> }>
          <Route index
            element={
              <>
                <Admin />
              </>
            }
          />
        </Route>
        <Route path="user" element={ <UserRoute /> }>
          <Route index
            element={
              <>
                <User />
              </>
            }
          />
        </Route>
      </Routes>
      <ToastContainer position="top-right"
        autoClose={ 5000 } hideProgressBar={ false }
        newestOnTop={ false } closeOnClick
        rtl={ false } pauseOnFocusLoss
        draggable={ false } pauseOnHover
      />
    </>
  )
}
export default App
