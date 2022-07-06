import { useSelector } from 'react-redux'
import { notifyError, notifyInfo, notifySuccess } from '../consts/notifications'

const useDebtor = () => {
  const token = useSelector(state => state.session.value.token)

  const insertDebtor = async ({ name, lastName, motherLastName, address }) => {
    const result = await window.electron.invoke(
      'debtor:insertDebtor',
      { token, name, lastName, motherLastName, address }
    )
    if (!result) {
      notifyInfo('Error al agregar deudor')
      return false
    }
    if (result.error) {
      notifyError('Error interno')
      return false
    }

    notifySuccess('Deudor agregado')

    return result
  }

  return {
    insertDebtor
  }
}

export default useDebtor
