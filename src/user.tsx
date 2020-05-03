import React from 'react'
import { useLoginStore } from './reducers/login'

export default function User () {
  const state = useLoginStore()

  if (state.loggedIn) {
    return <div>Welcome {state.form.username}!</div>
  }

  return null
}
