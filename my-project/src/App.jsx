import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Blogs from './components/Blogs.jsx'
import Hr from './components/Hr.jsx'
import Directory from './components/Directory.jsx'
import Home from './components/Home.jsx'
import Announcement from './components/Announcement.jsx'
import Gallery from './components/Gallery.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Error from './components/Error.jsx'
import Documents from './components/Documents.jsx'
import Analytics from './components/Analytics.jsx'
import Userprofile from './components/Userprofile.jsx'


function App() {

  return (
    <Router className='bg-#e3d5ca dark:bg-gray-900 dark:text-white duration-200 overflow-hidden overflow-y-scroll transition-all'>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/hr' element={<Hr/>}/>
          <Route path='/directory' element={<Directory/>}/>
          <Route path='/announcement' element={<Announcement/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/documents' element={<Documents/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/userprofile' element={<Userprofile/>}/>
      </Routes>
    </Router>
  )
}

export default App
