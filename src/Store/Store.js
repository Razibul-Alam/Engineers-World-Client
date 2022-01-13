import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// import counterReducer from '../Pages/CounterSlice'
import sectorsReducer from '../Pages/Redux-feature/SectorsSlice'
export default configureStore({
  reducer: {
    sectors: sectorsReducer,
  },
})