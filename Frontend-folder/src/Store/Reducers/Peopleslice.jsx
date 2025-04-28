import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
}

export const Peopleslice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

        loadpeopledata: (state, action) => {
            state.info = action.payload
        },

        removepeopledata: (state, action) => {
            state.info = null
        }
    },
  })
  
// Action creators are generated for each case reducer function
export const { loadpeopledata, removepeopledata } = Peopleslice.actions
  
export default Peopleslice.reducer
  