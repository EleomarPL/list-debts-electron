import { Suspense, lazy } from 'react'
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

import SpinnerLoadingPage from './components/common/SpinnerLoadingPage'

const Index = lazy(() => import('./pages/Index'))
const Admin = lazy(() => import('./pages/Admin'))
const User = lazy(() => import('./pages/User'))

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <PublicRoute /> }>
          <Route index
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Index />
                </Suspense>
              </>
            }
          />
        </Route>
        <Route path="admin" element={ <AdminRoute /> }>
          <Route index
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Admin />
                </Suspense>
              </>
            }
          />
        </Route>
        <Route path="user" element={ <UserRoute /> }>
          <Route index
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <User />
                </Suspense>
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
