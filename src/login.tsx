import React, { useState } from 'react'
import axios from 'axios'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit () {
    setIsLoading(true)

    await axios.post('/api/login', { email, password })

    setIsLoading(false)
  }

  return (
    <div>
      <input type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />

      {!isLoading ? <button onClick={() => handleSubmit()}>Sign in</button> : 'Logging in...'}
    </div>
  )
}
