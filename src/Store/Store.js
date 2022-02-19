import { configureStore } from '@reduxjs/toolkit'
import engineersReducer from '../Pages/Redux-feature/EngineersSlice'
import firebaseReducer from '../Pages/Redux-feature/FirebaseSlice'
export default configureStore({
  reducer: {
    engineers:engineersReducer,
    users:firebaseReducer,
  },
})