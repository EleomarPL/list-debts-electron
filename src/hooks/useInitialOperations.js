import { openModalCreateAdmin } from '../components/modals/ModalCreateAdmin'
import { notifyInfo, notifyError } from '../consts/notifications'

const useInitialOperations = () => {
  const isThereAdmin = async () => {
    const result = await window.electron.invoke('initial:is-there-admin')
    if (result?.error) {
      notifyError('Error interno')
      return false
    }

    if (result) {
      notifyInfo('Registre un administrador')
      openModalCreateAdmin()
    }
  }
  const insertAdmin = async ({ name, lastName, motherLastName, username, password }) => {
    const result = await window.electron.invoke('user:insert-admin', { name, lastName, motherLastName, username, password })
    if (result?.error) {
      notifyError('Error interno')
      return false
    }

    if (result) notifyInfo('Administrador registrado')
    else notifyInfo('Ya existe un administrador')
    return true
  }

  return {
    isThereAdmin, insertAdmin
  }
}

export default useInitialOperations
