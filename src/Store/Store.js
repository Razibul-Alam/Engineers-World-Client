import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from '../Pages/CounterSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})