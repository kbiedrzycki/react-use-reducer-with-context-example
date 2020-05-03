import React, { Reducer } from 'react'

export function buildStore<State, Action> (reducer: Reducer<State, Action>, initialState: State) {
  const storeContext = React.createContext<State>(null!)
  const dispatchContext = React.createContext<React.Dispatch<Action>>(() => null)

  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  function useStore () {
    return React.useContext(storeContext)
  }

  function useDispatch () {
    return React.useContext<React.Dispatch<Action>>(dispatchContext)
  }

  return {
    StoreProvider,
    useStore,
    useDispatch,
    storeContext,
    dispatchContext,
  }
}
