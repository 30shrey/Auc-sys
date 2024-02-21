import React from 'react'
import '../App.css'
import Navbar from './Navbar';

const Features = (props) => {
  return (
    <div className='Feature'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto web-desc'>
            <h1 className='display-5 text-center heading'>Features</h1>
            <p className='lead text-center'>
                This is a complete and feature-rich Student 
                Management Website for all educational institutes. This Student Management System 
                is for registration activities in colleges or universities. Our free Student Management System 
                manages admission.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features