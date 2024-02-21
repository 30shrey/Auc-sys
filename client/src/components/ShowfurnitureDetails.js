import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function ShowFurnitureDetails(props) {
  const [furniture, setFurniture] = useState({});
  const [showToast, setShowToast] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/furnitures/${id}`)
      .then((res) => {
        setFurniture(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowFurnitureDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`/api/furnitures/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('Furniture deleted!', {
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
          navigate('/furniture-list'); // Navigate to homepage
        }, 500); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Error while deleting the book, please try again!', {
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
  };

  return (
    <div className='ShowFurnitureDetails'>
      <Navbar />
     <br></br>
     <br /> 
     <br />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-4 text-center'>Furniture's Record</h1>
            <p className='lead text-center'>View Furniture's Info</p>
            <hr /> <br />

            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <table className='table table-striped table-bordered table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>Product</th>
                      <td>{furniture.product}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Price</th>
                      <td>{furniture.price}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Description</th>
                      <td>{furniture.description}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Material</th>
                      <td>{furniture.material}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Brand</th>
                      <td>{furniture.brand}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row justify-content-around mt-3'>
              <div className='col-md-4'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(furniture._id);
                  }}
                >
                  Delete Furniture
                </button>
              </div>
              <div className='col-md-4'>
                <Link
                  to={`/edit-furniture/${furniture._id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Furniture
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to='/furniture-list' className='btn btn-outline-dark btn-lg btn-block'>
                  Show Furniture List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowFurnitureDetails;