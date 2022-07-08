import { notifyError } from '../consts/notifications'

const useRegisterPays = () => {
  const getRegisterPays = async ({ value }) => {
    const registerPays = await window.electron.invoke(
      'register:get-register-pays',
      { value }
    )
    if (!registerPays) {
      notifyError('Error al obtener registros de pagos')
      return false
    } else if (registerPays.error) {
      notifyError('Error interno')
      return false
    }

    return registerPays.map(registerPay => ({
      ...registerPay,
      date: new Date(registerPay.date).toISOString().split('T').join(' ')
    }))
  }

  return {
    getRegisterPays
  }
}

export default useRegisterPays
