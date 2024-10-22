import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
  }

  export const Movieslice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

        loadmoviedata: (state, action) => {
            state.info = action.payload
        },

        removemoviedata: (state, action) => {
            state.info = null
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadmoviedata, removemoviedata } = Movieslice.actions
  
  export default Movieslice.reducer
  