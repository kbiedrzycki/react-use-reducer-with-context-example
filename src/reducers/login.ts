import { buildStore } from '../store'

export type LoginState = {
  form: {
    username: string,
    password: string
  },
  isLoading: boolean,
  loggedIn: boolean
}

export type LoginAction =
  | { type: 'UPDATE_FORM', field: string, data: string }
  | { type: 'SUBMITTING' }
  | { type: 'LOGGED_IN' }

export const initialState = {
  form: {
    username: '',
    password: '',
  },
  isLoading: false,
  loggedIn: false,
}

export const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.data,
        },
      }
    case 'SUBMITTING':
      return { ...state, isLoading: true }
    case 'LOGGED_IN':
      return { ...state, isLoading: false, loggedIn: true }
    default:
      return state
  }
}

const { StoreProvider, useDispatch, useStore } = buildStore(
  loginReducer,
  initialState,
)

export {
  StoreProvider as LoginProvider,
  useDispatch as useLoginDispatch,
  useStore as useLoginStore,
}
