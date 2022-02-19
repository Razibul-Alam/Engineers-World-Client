import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk(
  'sectors/fetchById',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    
    console.log(response)
    return response
  }
)

export const EngineersSlice = createSlice({
  name: 'sectors',
  initialState:{
    allEngineers:[],
    favoriteList:[],
    hiredList:[]
    },
  reducers: {
    addFavorites:(state,action)=>{
      state.favoriteList=[...state.favoriteList,action.payload]
      console.log(state.favoriteList)
    },
    removeFavorite:(state,action)=>{
      const remainFav=state.favoriteList.filter(favorite=>favorite.id!==action.payload)
      state.favoriteList=remainFav
      console.log(action.payload)
    },
    addHired:(state,action)=>{
      state.hiredList=[...state.hiredList,action.payload]
      console.log(state.hiredList)
    },
    removeHire:(state,action)=>{
      const remainHire=state.hiredList.filter(hire=>hire.id!==action.payload)
      state.favoriteList=remainHire
      console.log(action.payload)
    },
  },
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      console.log(state)
      state.allEngineers=payload
    })
  },
})

// Action creators are generated for each case reducer function
export const {addFavorites,removeFavorite,addHired,removeHire} = EngineersSlice.actions

export default EngineersSlice.reducer