import { useEffect } from 'react'
import { useCredentialsContext } from "../hooks/useCredentialsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import CredentialDetails from '../components/CredentialDetails'
import CredentialForm from '../components/CredentialForm'
import PasswordGenerator from '../components/PasswordGenerator'

const Home = () => {
  const {credentials, dispatch} = useCredentialsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchCredentials = async () => {
      const response = await fetch('/api/credentials', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CREDENTIALS', payload: json})
      }
    }

    if (user) {
      fetchCredentials()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="credentials">
        {credentials && credentials.map((credential) => (
          <CredentialDetails key={credential._id} credential={credential} />
        ))}
      </div>
      <CredentialForm />
    </div>
  )
}

export default Home