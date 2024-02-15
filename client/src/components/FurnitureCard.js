import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const FurnitureCard = (props) => {
  const furniture = props.furniture

  return (
    <div className='card-container'>
      <img
        src='https://www.pojfurniture.com/storage/products/230922055953-2.jpg'
        alt='Furniture image'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-furniture/${furniture._id}` }>
            {furniture.product  }
          </Link> 
        </h2>
        <h3>{furniture.price}</h3>
        <p>{furniture.description}</p>
      </div>
    </div>  
  )
}

export default FurnitureCard