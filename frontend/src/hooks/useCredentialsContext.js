import { CredentialsContext } from '../context/CredentialContext'
import { useContext } from 'react'

export const useCredentialsContext = () => {
  const context = useContext(CredentialsContext)

  if (!context) {
    throw Error('useCredentialsContext must be used inside an CredentialsContextProvider')
  }

  return context
}