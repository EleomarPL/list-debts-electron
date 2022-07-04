import { configureStore } from '@reduxjs/toolkit'

import sessionReducer from './features/sessionReducer'

export const store = configureStore({
  reducer: {
    session: sessionReducer
  }
})
