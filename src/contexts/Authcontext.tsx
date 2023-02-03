import { createContext, useContext, useState } from 'react'
import Router from 'next/router'
import firebase from '../lib/firebase'

interface AuthProviderProps {
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
  user: any
}

const AuthContext = createContext({} as AuthProviderProps)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signIn = () => {
    try {
      setLoading(true)
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
          setUser(response.user)
          console.log(response.user)
        })
    } finally {
      setLoading(false)
    }
  }
  const signOut = () => {
    try {
      Router.push('/')

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(null))
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext
