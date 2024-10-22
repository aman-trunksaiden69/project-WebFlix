import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trendingpage from './Components/Trendingpage'
import Popularpage from './Components/Popularpage'
import Movie from './Components/Movie'
import Tvshowspage from './Components/Tvshowspage'
import Peoplepage from './Components/Peoplepage'
import Moviedetails from './Components/Moviedetails'
import Peopledetails from './Components/Peopledetails'
import Tvdetails from './Components/Tvdetails'
import Trailer from './Components/Templates/Trailer'
import Notfound from './Components/Notfound'
import Aboutpage from './Components/Aboutpage'
import Contactpage from './Components/Contactpage'


const App = () => {


  return <div className='home w-screen h-screen bg-gradient-to-r from-blue-400 via-pink-500 to-white flex items-center justify-center gap-1'>      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Trendingpage' element={<Trendingpage />}/>
        <Route path='/Popularpage' element={<Popularpage />}/>
        <Route path='/movie' element={<Movie />} />
        <Route path='/movie/details/:id' element={<Moviedetails />}>
          <Route path='/movie/details/:id/trailer' element={<Trailer />} />
        </Route>
        <Route path='/tv' element={<Tvshowspage />} />
        <Route path='/tv/details/:id' element={<Tvdetails />} >
          <Route path='/tv/details/:id/trailer' element={<Tvdetails />} />
        </Route>
        <Route path='/Peoplepage' element={<Peoplepage />} />
        <Route path='/Peoplepage/details/:id' element={<Peopledetails />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/Aboutpage' element={<Aboutpage />} />
        <Route path='/Contactpage' element={<Contactpage />} />
      </Routes>
  </div>
  
}

export default App