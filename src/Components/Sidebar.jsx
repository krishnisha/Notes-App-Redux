import React from 'react'
import Userprofile from './Userprofile';
import Navigation from './Navigation';
import '../App.css'

function Sidebar() {
 
  return (
      <div className='sidebar-home'>
        <Userprofile />
        <Navigation />
      </div>
  )
}

export default Sidebar