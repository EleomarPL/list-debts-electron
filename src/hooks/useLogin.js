import { useDispatch } from 'react-redux'

import { login as loginDispatch } from '../features/sessionReducer'
import { notifyInfo } from '../consts/notifications'

const useLogin = () => {
  const dispatch = useDispatch()

  const login = async ({ username, password, callback }) => {
    const result = await window.electron.invoke('login:login', { username, password })
    callback()
    if (!result) notifyInfo('Usuario o contraseña incorrectos')
    else if (result?.error) notifyInfo('Error interno')
    else {
      window.localStorage.setItem('token', JSON.stringify(result?.token))
      window.localStorage.setItem('user', JSON.stringify(result))
      dispatch(loginDispatch(result))
    }
  }

  return { login }
}

export default useLogin
