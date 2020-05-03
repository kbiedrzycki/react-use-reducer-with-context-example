import React from 'react'
import axios from 'axios'
import { useStore } from './store'

export default function Login () {
  const { state, dispatch } = useStore()
  const { login: { isLoading, loggedIn, form: { email, password } } } = state

  async function handleSubmit () {
    dispatch({ type: 'LOGIN/SUBMITTING' })

    await axios.post('/api/login', { email, password })

    dispatch({ type: 'LOGIN/LOGGED_IN' })
  }

  if (loggedIn) {
    return null
  }

  return (
    <div>
      <input type="email" value={email} onChange={
        e => dispatch({ type: 'LOGIN/UPDATE_FORM', field: 'email', data: e.currentTarget.value })
      } />
      <input type="password" value={password} onChange={
        e => dispatch({ type: 'LOGIN/UPDATE_FORM', field: 'password', data: e.currentTarget.value })
      } />

      {!isLoading ? <button onClick={() => handleSubmit()}>Sign in</button> : 'Logging in...'}
    </div>
  )
}
