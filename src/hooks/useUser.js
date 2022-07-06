import { useSelector } from 'react-redux'
import { notifyError, notifyInfo, notifySuccess } from '../consts/notifications'

const useUser = () => {
  const token = useSelector(state => state.session.value.token)

  const getUsers = async () => {
    const resultGetUsers = await window.electron.invoke('user:get-users', { token })
    if (!resultGetUsers) {
      notifyError('Error al obtener usuarios')
      return false
    }

    return resultGetUsers
  }
  const insertUser = async ({ name, lastName, motherLastName, username, password }) => {
    const result = await window.electron.invoke(
      'user:insert-user',
      { token, name, lastName, motherLastName, username, password }
    )
    if (!result) {
      notifyError('Error al agregar usuario')
      return false
    }
    if (result.error) {
      notifyError('Error interno')
      return false
    }

    notifySuccess('Usuario agregado')

    return result
  }
  const updateUser = async ({ idUser, name, lastName, motherLastName, username, password }) => {
    const result = await window.electron.invoke(
      'debtor:updateDebtor',
      { token, idUser, name, lastName, motherLastName, username, password }
    )
    if (!result) {
      notifyInfo('Error al modificar deudor')
      return false
    }
    if (result.error) {
      notifyError('Error interno')
      return false
    }

    notifySuccess('Deudor modificado')

    return result
  }

  return {
    insertUser, updateUser, getUsers
  }
}

export default useUser
