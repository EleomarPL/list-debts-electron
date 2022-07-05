import { openModalCreateAdmin } from '../components/modals/ModalCreateAdmin'
import { notifyInfo, notifyError } from '../consts/notifications'

const useInitialOperations = () => {
  const isThereAdmin = async () => {
    const result = await window.electron.invoke('initial:is-there-admin')
    if (result?.error) {
      notifyError('Error interno')
      return false
    }

    if (!result) {
      notifyInfo('Registre un administrador')
      openModalCreateAdmin()
    }
  }

  return {
    isThereAdmin
  }
}

export default useInitialOperations
