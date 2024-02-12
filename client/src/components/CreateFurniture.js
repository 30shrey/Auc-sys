import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom';

const CreateFurniture = (props) => {

  const navigate = useNavigate();
  const [furniture, setFurniture] = useState({
    Product: '',
    Price: '',
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
    axios.post("api/furniture", furniture).then((res) => {
      setFurniture({
        Product: "",
        Price: "",
        description: "",
        material: "",
        brand: ""
      })
    //Show the success alert
    toast.success('Book added successfully!', {
      position: "top-right",
      autoClose: 5000,
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
    }, 5000); // Adjust the timeout as needed

  })
    .catch ((err) => {
  console.log('Error in CreateBook!');
  console.log('The error is -> ')
  console.log(err)
  // Show the success alert

  toast.success('Book added successfully!', {
    position: "top-right",
    autoClose: 5000,
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
  }, 5000); // Adjust the timeout as needed

})
    .catch ((err) => {
  console.log('Error in CreateBook!');
  console.log('The error is -> ')
  console.log(err)
  // Show the success alert
  toast.error('Something went wrong, try again!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
  });
});
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
                value={furniture.Product}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <input
                type='number'
                placeholder='Price of the Product'
                name='Price'
                className='form-control'
                value={furniture.Price}
                onChange={onChange}
              />
            </div>


            <div className='form-group'>
              <input
                type='text'
                placeholder='Description '
                name='Price'
                className='form-control'
                value={furniture.description}
                onChange={onChange}
              />
            </div>


            <div className='form-group'>
              <input
                type='text'
                placeholder='Material of the product'
                name='Price'
                className='form-control'
                value={furniture.material}
                onChange={onChange}
              />
            </div>


            <div className='form-group'>
              <input
                type='text'
                placeholder='Brand Name'
                name='Price'
                className='form-control'
                value={furniture.brand}
                onChange={onChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

};

export default CreateFurniture;