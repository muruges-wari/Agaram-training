import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice'

const Store= configureStore({
  reducer: {
    user:userSlice,
  },
})
export default Store