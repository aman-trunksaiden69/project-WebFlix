import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './Reducers/Peopleslice'
import movieReducer from './Reducers/Movieslice'
import tvReducer from './Reducers/Tvslice'



export const store = configureStore({
  reducer: {
    //handle movie related data
    movie: movieReducer,

    //handle tv related data
    tv: tvReducer,

    //handle people related data
    people: peopleReducer
  },

});