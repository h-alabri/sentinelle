import { useAuthContext } from './useAuthContext'
import { useCredentialsContext } from './useCredentialsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchCredentials } = useCredentialsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchCredentials({ type: 'SET_CREDENTIALS', payload: null })
  }

  return { logout }
}