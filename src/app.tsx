import React from 'react'
import Login from './login'
import User from './user'
import { LoginProvider } from './reducers/login'

export default function App () {
  return (
    <LoginProvider>
      <Login />
      <User />
    </LoginProvider>
  )
}
