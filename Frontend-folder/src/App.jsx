import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trendingpage from './Components/Trendingpage'
import Popularpage from './Components/Popularpage'
import Movie from './Components/Movie'
import Tvshowspage from './Components/Tvshowspage'
import Peoplepage from './Components/Peoplepage'
import Moviedetails from './Components/Moviedetails'
import Movieplayer from './Components/Templates/Movieplayer'
import Peopledetails from './Components/Peopledetails'
import Tvdetails from './Components/Tvdetails'
import Trailer from './Components/Templates/Trailer'
import Notfound from './Components/Notfound'
import Aboutpage from './Components/Aboutpage'
import Contactpage from './Components/Contactpage'
import Login from './Components/Login'
import Start from './Components/Start'
import Profile from './Components/Profile'
import Registerpage from './Components/Registerpage'
import Authenticatedroutes from './Components/Authenticaton'
import './index.css';
import Logout from './Components/Logout'
import Editprofile from './Components/Templates/Editprofile'
import Tvplayer from './Components/Templates/Tvplayer'



const App = () => {


  return <div className='home w-screen h-screen bg-gradient-to-r from-blue-300 via-pink-400 to-white flex items-center justify-center gap-1'>      
      <Routes>
        <Route path='/' element={<Start />} /> 
        <Route path='/Editprofile' element={<Authenticatedroutes><Editprofile /></Authenticatedroutes>} /> 
        <Route path='/Profile' element={<Authenticatedroutes><Profile /></Authenticatedroutes>} /> 
        <Route path='/Home' element={<Authenticatedroutes><Home /></Authenticatedroutes>}/>
        <Route path='/Trendingpage' element={<Authenticatedroutes><Trendingpage /></Authenticatedroutes>}/>
        <Route path='/Popularpage' element={<Authenticatedroutes><Popularpage /></Authenticatedroutes>}/>
        <Route path='/movie' element={<Authenticatedroutes><Movie /></Authenticatedroutes>} />
        <Route path='/movie/details/:id' element={<Authenticatedroutes><Moviedetails /></Authenticatedroutes>}>
          <Route path='/movie/details/:id/trailer' element={<Authenticatedroutes><Trailer /></Authenticatedroutes>} />
          <Route path='/movie/details/:id/movieplayer' element={<Authenticatedroutes><Movieplayer /></Authenticatedroutes>} />
        </Route>
        <Route path='/tv' element={<Authenticatedroutes><Tvshowspage /></Authenticatedroutes>} />
        <Route path='/tv/details/:id' element={<Authenticatedroutes><Tvdetails /></Authenticatedroutes>} >
          <Route path='/tv/details/:id/trailer' element={<Authenticatedroutes><Tvdetails /></Authenticatedroutes>} />
          <Route path='/tv/details/:id/:eid/:sid/tvplayer' element={<Authenticatedroutes><Tvplayer /></Authenticatedroutes>} />
        </Route>
        <Route path='/Peoplepage' element={<Authenticatedroutes><Peoplepage /></Authenticatedroutes>} />
        <Route path='/Peoplepage/details/:id' element={<Authenticatedroutes><Peopledetails /></Authenticatedroutes>} />
        <Route path='*' element={<Notfound />} />
        <Route path='/Aboutpage' element={<Authenticatedroutes><Aboutpage /></Authenticatedroutes>} />
        <Route path='/Contactpage' element={<Authenticatedroutes><Contactpage /></Authenticatedroutes>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Registerpage />} />
        <Route path='/Logout' element={<Logout />} />
      </Routes>
  </div>
  
}

export default App