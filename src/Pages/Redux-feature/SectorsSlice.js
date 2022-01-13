import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sectors:[],
}

export const SectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
   
    
  },
})

// Action creators are generated for each case reducer function
export const {} = SectorsSlice.actions

export default SectorsSlice.reducer