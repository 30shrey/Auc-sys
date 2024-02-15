import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FurnitureCard from './FurnitureCard';
import Navbar from './Navbar';
import Footer from './Footer';

function ShowFurnitureList() {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/furnitures`)
      .then((res) => {
        setFurnitures(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFurnitureList ->');
        console.log(err)
      });
  }, []);
  //  Logic for showing all the furnitures
  const furnitureList =
    furnitures.length === 0
      ? 'there is no furniture list!'
      : furnitures.map((furniture, k) => <FurnitureCard furniture={furniture} key={k} />);

  return (
    <div className='ShowFurnitureList'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Furnitures List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-furniture'
              className='btn btn-outline-warning float-right'
            >
              + Add New Furniture
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{furnitureList}</div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowFurnitureList;