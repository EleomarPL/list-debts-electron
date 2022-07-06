import { useSelector } from 'react-redux'
import { notifyError, notifySuccess } from '../consts/notifications'

const useDebt = () => {
  const token = useSelector(state => state.session.value.token)

  const addDebts = async ({ idDebtor, listDebts }) => {
    const resultAddDebts = await window.electron.invoke('debt:insertDebt', { token, idDebtor, listDebts })
    if (!resultAddDebts) {
      notifyError('Error al agregar deuda')
      return false
    }

    notifySuccess('Deuda agregada')
    return resultAddDebts
  }

  return {
    addDebts
  }
}

export default useDebt
