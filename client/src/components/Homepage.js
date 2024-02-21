import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='Home'>
      <Navbar />
        <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>
      
      <div className='text-end font-monospace hcls'>
        <div className='hdiv'>
        <h1 className='text'>AUCTION SYSTEM</h1>
        <p className='text1'>buy your most-liked fittings</p>
        </div>
        <Link to='/create-furniture' className='btn btn-outline-light btn-lg hbtn'>
              Let's GO!
            </Link>
            </div>
       </div>

    
  )
}

export default Home