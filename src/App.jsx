import { ToastContainer } from 'react-toastify'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/roboto'

const App = () => {
  return (
    <>
      <p>Hola mundo con Vite</p>
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
