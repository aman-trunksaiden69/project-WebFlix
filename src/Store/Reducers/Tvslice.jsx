import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
  }

  export const Tvslice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

        loadtvdata: (state, action) => {
            state.info = action.payload
        },

        removetvdata: (state, action) => {
            state.info = null
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadtvdata, removetvdata } = Tvslice.actions
  
  export default Tvslice.reducer
  