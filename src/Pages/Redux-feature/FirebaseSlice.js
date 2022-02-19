import { createSlice } from '@reduxjs/toolkit'
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,updateProfile} from "firebase/auth";
import { firebaseConfig } from '../../FirebaseConfig/FirebaseConfig';
const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const EngineersSlice = createSlice({
    name: 'sectors',
    initialState:{
      user:[],

      },
    reducers: {
      addItem:(state,action)=>{
        state.AllSectors=[...state.AllSectors,action.payload]
        console.log(state.AllSectors)
      },
      signinGoogle:(state,action)=>{
   return signInWithPopup(auth, provider)
      
        }
      }

    },  
  )
  export const {addItem,signinGoogle} = EngineersSlice.actions

export default EngineersSlice.reducer