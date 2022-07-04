import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    value: {},
    status: 'idle'
  },
  reducers: {
    logout: state => {
      state.value = {}
    }
  }
})

export const { logout } = sessionSlice.actions

export default sessionSlice.reducer
