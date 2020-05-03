export type LoginState = {
  form: {
    email: string,
    password: string
  },
  isLoading: boolean,
  loggedIn: boolean
}

export type LoginAction =
  | { type: 'LOGIN/UPDATE_FORM', field: string, data: string }
  | { type: 'LOGIN/SUBMITTING' }
  | { type: 'LOGIN/LOGGED_IN' }

export const initialState = {
  form: {
    email: '',
    password: '',
  },
  isLoading: false,
  loggedIn: false,
}

export const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'LOGIN/UPDATE_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.data,
        },
      }
    case 'LOGIN/SUBMITTING':
      return { ...state, isLoading: true }
    case 'LOGIN/LOGGED_IN':
      return { ...state, isLoading: false, loggedIn: true }
    default:
      return state
  }
}
