import { createSlice } from '@reduxjs/toolkit'

const initialState={
    login:[],
    register:[],
    singleuser:[],
    alluser:[],
    guestuser:[],
    isloaderactive:true
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateLoginSuccess:(state,action)=>{
        console.log(action)
        state.login=action.payload
    },
    updateRegSuccess:(state,action)=>{
      console.log(action)
      state.register=action.payload
  },
    singleUser:(state,action)=>{
    console.log(action)
    state.singleuser=action.payload
},
  allUser:(state,action)=>{
  console.log(action)
  state.alluser=action.payload
},
  guestUser:(state,action)=>{
  console.log(action)
  state.guestuser=action.payload
},
loaderActive:(state,action)=>{
  console.log(action)
  state.isloaderactive=action.payload
},
  
    
  },
})

export const { updateLoginSuccess ,updateRegSuccess,singleUser,guestUser,allUser,loaderActive} = userSlice.actions

export default userSlice.reducer