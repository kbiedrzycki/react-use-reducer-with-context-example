import React from 'react'
import { StoreProvider } from './store'
import Login from './login'
import User from './user'

export default function App () {
  return (
    <StoreProvider>
      <User />
      <Login />
    </StoreProvider>
  )
}
