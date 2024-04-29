import { createContext, useReducer } from 'react'

export const CredentialsContext = createContext()

export const credentialsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CREDENTIALS': 
      return {
        credentials: action.payload
      }
    case 'CREATE_CREDENTIAL':
      return {
        credentials: [action.payload, ...state.credentials]
      }
    case 'DELETE_CREDENTIAL':
      return {
        credentials: state.credentials.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const CredentialsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(credentialsReducer, {
    credentials: null
  })

  return (
    <CredentialsContext.Provider value={{...state, dispatch}}>
      { children }
    </CredentialsContext.Provider>
  )
}