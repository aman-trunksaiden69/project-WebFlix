import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './Reducers/Peopleslice'
import movieReducer from './Reducers/Movieslice'
import tvReducer from './Reducers/Tvslice'



export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer
  },
})