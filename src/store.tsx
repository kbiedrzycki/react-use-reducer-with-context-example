import React from 'react'
import { LoginAction, loginReducer, LoginState, initialState as loginInitialState } from './reducers/login'

type State = {
  login: LoginState
}

type Actions =
  | LoginAction

const initialState: State = {
  login: loginInitialState,
}

const appReducer = (state: State, action: Actions) => ({
  login: loginReducer(state.login, action),
})

const StoreContext = React.createContext<{ state: State, dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
})

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreConsumer = StoreContext.Consumer

export function useStore () {
  return React.useContext(StoreContext)
}
