import React from 'react'
import { StoreConsumer } from './store'

class User extends React.Component {
  render () {
    return (
      <StoreConsumer>
        {({ state }) => {
          console.log(state)

          if (state.login.loggedIn) {
            return <div>Welcome {state.login.form.email}!</div>
          }

          return null
        }}
      </StoreConsumer>
    )
  }
}

export default User
