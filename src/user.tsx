import React from 'react'
import { useStore } from './store'

export default function User () {
  const { state } = useStore()

  if (state.login.loggedIn) {
    return <div>Welcome {state.login.form.email}!</div>
  }

  return null
}
