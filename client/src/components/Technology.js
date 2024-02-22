import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Tech = () =>(
    <div className='Technology'>
        <NavBar />
        <div className='container'>
            <h1 className='display-4'>Technologies used in this application</h1>
            <ul>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
                <li>Mongoose</li>
                <li>Axios</li>
                <li>Cors</li>
                <li>Dotenv</li>
                <li>Body-Parser</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default Tech