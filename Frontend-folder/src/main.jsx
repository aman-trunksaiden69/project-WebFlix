import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store/Store.jsx'
import UserContext from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
 <UserContext>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </UserContext>
</Provider>
)
