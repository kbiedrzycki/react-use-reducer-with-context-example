import React from 'react'
import axios from 'axios'
import { useLoginStore, useLoginDispatch } from './reducers/login'

export default function Login () {
  const { isLoading, loggedIn, form: { username, password } } = useLoginStore()
  const dispatch = useLoginDispatch()

  async function handleSubmit () {
    dispatch({ type: 'SUBMITTING' })

    await axios.post('/api/login', { username, password })

    dispatch({ type: 'LOGGED_IN' })
  }

  if (loggedIn) {
    return null
  }

  return (
    <div>
      <input type="text" value={username} placeholder="Username" onChange={
        e => dispatch({ type: 'UPDATE_FORM', field: 'username', data: e.currentTarget.value })
      } />
      <input type="password" value={password} placeholder="Password" onChange={
        e => dispatch({ type: 'UPDATE_FORM', field: 'password', data: e.currentTarget.value })
      } />

      {!isLoading ? <button onClick={() => handleSubmit()}>Sign in</button> : 'Logging in...'}
    </div>
  )
}
