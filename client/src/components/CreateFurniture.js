//  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//  import axios from 'axios';

import Navbar from "./Navbar"
import Footer from "./Footer"
 import { useNavigate } from 'react-router-dom';

const CreateFurniture = (props) => {

   const onSubmit = (e) =>{
    //Prevents the page fron refreshing
    e.preventDefault();

    //API calls with the help of axios
    // axios.post("api/furniture",furniture).then((res)=>{
    //   setFurniture({
    //     Product:"",
    //     Price:"",
    //     description:"",
    //     material:"",
    //     brand:""
    //   })
    //  })
   }
  // Define the state with useState hook
  return (
    <div className='CreateFurniture'>
      <Navbar />
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Furniture List
            </Link>
            </div>
            <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Furniture</h1>
            <p className='lead text-center'>Create new Furniture</p>

             <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter the product'
                  name='product'
                  className='form-control'
                 // value={furniture.product}
                 // onChange={onChange}
                />
                </div>
                </form>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CreateFurniture;