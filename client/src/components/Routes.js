import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllRoutes = () =>(
    <div className='Routes'>
        <Navbar />
        <br>
        </br>
        <br></br>
        <div className='container'>
            <h3 className='display-4'>Backend Routes</h3>
            <ul>
                <li>Create: api/furniture/ </li>
                <li>Read: api/furnitures/ </li>
                <li>FindById: api/furniture/:id</li>
                <li>Update: api/furniture/:id</li>
                <li>Delete: api/furniture/:id</li>
            </ul>
        </div>
        <div className='container'>
            <h3 className='display-4'>Frontend Routes</h3>
            <ul>
                <li>Create: /create-furniture </li>
                <li>Read: /furniture-list </li>
                <li>FindById: /show-furniture/:id</li>
                <li>Update: /edit-furniture/:id</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default AllRoutes