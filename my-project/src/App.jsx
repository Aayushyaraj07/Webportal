import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Blogs from './components/Blogs.jsx'
import Hr from './components/Hr.jsx'
import Directory from './components/Directory.jsx'
import Home from './components/Home.jsx'
import Announcement from './components/Announcement.jsx'
import Gallery from './components/Gallery.jsx'

function App() {

  return (
    <Router className='bg-#e3d5ca dark:bg-gray-900 dark:text-white duration-200 overflow-hidden overflow-y-scroll transition-all'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/hr' element={<Hr/>}/>
          <Route path='/directory' element={<Directory/>}/>
          <Route path='/announcement' element={<Announcement/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
  )
  {/* <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all'>
    <Navbar/>
  </div> */}
}

export default App
