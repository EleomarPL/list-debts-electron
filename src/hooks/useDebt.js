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
  const getDebtByDebtor = async ({ idDebtor }) => {
    const resultGetDebtByDebtor = await window.electron.invoke('debt:getDebtByDebtor', { token, idDebtor })
    if (!resultGetDebtByDebtor) {
      notifyError('Error al obtener deuda')
      return false
    }
    return resultGetDebtByDebtor.map(debtor => ({ ...debtor, box: true }))
  }
  const payDebts = async ({ listDebts }) => {
    const filterDebtsToPay = listDebts.filter(item => item.box)
    const resultPayDebt = await window.electron.invoke(
      'debt:payDebt',
      { token, listDebts: filterDebtsToPay }
    )
    if (!resultPayDebt) {
      notifyError('Error al pagar deuda')
      return false
    }

    return resultPayDebt
  }

  return {
    addDebts, getDebtByDebtor, payDebts
  }
}

export default useDebt
