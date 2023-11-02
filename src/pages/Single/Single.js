import React from 'react'
import './Single.css'
import Singlepost from '../../components/singlepost/Singlepost.js'
import Sidebar from '../../components/sidebar/Sidebar.js'



export default function Single() {

  

  return (
    <div className='Single'>
      <Singlepost/>
      <Sidebar/>
    </div>
  )
}
