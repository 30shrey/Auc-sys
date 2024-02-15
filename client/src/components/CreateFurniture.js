import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from "./Navbar"
import Footer from "./Footer"


const CreateFurniture = (props) => {

  const navigate = useNavigate();
  const [furniture, setFurniture] = useState({
    product: '',
    price: '',
    description: '',
    material: '',
    brand: '',
  });

  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    setFurniture({ ...furniture, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //Prevents the page fron refreshing
    e.preventDefault();

    //API calls with the help of axios
    axios.post("api/furnitures", furniture)
      .then((res) => {
        setFurniture({
          product: '',
          price: '',
          description: '',
          material: '',
          brand: '',
        });
        // Show the success alert

        toast.success('Furniture added successfully!', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 500); // Adjust the timeout as needed

      })
      .catch((err) => {
        console.log('Error in CreateFurniture!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: {Slide},
        });
      });
  }
  // Define the state with useState hook
  return (
    <div className='CreateFurniture'>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

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
                  value={furniture.product}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='price of the product'
                  name='price'
                  className='form-control'
                  value={furniture.price}
                  onChange={onChange}
                />
              </div>


              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Description '
                  name='description'
                  className='form-control'
                  value={furniture.description}
                  onChange={onChange}
                />
              </div>


              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Material of the product'
                  name='material'
                  className='form-control'
                  value={furniture.material}
                  onChange={onChange}
                />
              </div>


              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Brand Name'
                  name='brand'
                  className='form-control'
                  value={furniture.brand}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );

};

export default CreateFurniture;