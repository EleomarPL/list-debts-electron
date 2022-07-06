import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    value: JSON.parse(window.localStorage.getItem('user')) || {},
    status: 'idle'
  },
  reducers: {
    logout: state => {
      state.value = {}
    },
    login: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { logout, login } = sessionSlice.actions

export default sessionSlice.reducer
