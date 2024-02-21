import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function UpdateFurniture(props) {
  const [furniture, setFurniture] = useState({
    product: '',
    price: '',
    description: '',
    material: '',
    brand: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/furnitures/${id}`)
      .then((res) => {
        setFurniture({
          product: res.data.product,
          price: res.data.price,
          description: res.data.description,
          material: res.data.material,
          brand: res.data.brand,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateFurnitureInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setFurniture({ ...furniture, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      product: furniture.product,
      price: furniture.price,
      description: furniture.description,
      material: furniture.material,
      brand: furniture.brand,
    };

    axios
      .put(`/api/furnitures/${id}`, data)
      .then((res) => {
        navigate(`/show-furnituredetails/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateFurnitureInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateFurnitureInfo'>
      <Navbar />
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/furniture-list' className='btn btn-outline-dark float-left'>
              Show Furniture List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Furniture</h1>
            <p className='lead text-center'>Update Furniture Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='product'>PRODUCT</label>
              <input
                type='text'
                placeholder='NAME OF THE PRODUCT'
                name='product'
                className='form-control'
                value={furniture.product}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='price'>PRICE</label>
              <input
                type='number'
                placeholder='PRICE OF THE PRODUCT'
                name='price'
                className='form-control'
                value={furniture.price}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='DESCIPTION OF THE FURNITURE'
                name='description'
                className='form-control'
                value={furniture.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='material'>MATERIAL</label>
              <input
                type='text'
                placeholder='MATERIAL OF THE FURNITURE'
                name='material'
                className='form-control'
                value={furniture.material}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='brand'>BRAND</label>
              <input
                type='text'
                placeholder='BRAND NAME'
                name='brand'
                className='form-control'
                value={furniture.brand}
                onChange={onChange}
              />
            </div>
             <br></br>
            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Furniture
            </button>
            <br />
             <br />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateFurniture;