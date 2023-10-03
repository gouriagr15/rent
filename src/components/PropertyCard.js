import React from 'react';
import { ImLocation } from 'react-icons/im';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { MdOutlineBathtub } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import './PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className='col-md-4'>
      <div className='card' style={{ width:"25rem"}}>
        <div className="position-relative">
          <button className="btn btn-primary position-absolute top-0 start-0 mt-3 ms-3"
            style={{
              backgroundColor: 'white', // Set the background color to white
              border: "white",
              borderRadius: "30%",
              color: 'blue' // Set the text color to blue
            }}>
            {property.text}
          </button>
          <img
            className='card-img-top'
            src={property.imgSrc}
            alt={property.name}
            style={{ height: '200px', objectFit: 'cover', padding: "8px 8px" }}
          />
          <button className="btn position-absolute top-0 end-0 mt-3 me-3" style={{
            backgroundColor: 'white', // Set the background color to white
            border: "white",
            borderRadius: "50%",
            color: 'blue' // Set the text color to blue
          }}>
            <AiOutlineHeart />
          </button>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            <ImLocation /> {property.address}
          </p>
          <h5 className='card-title'>{property.name}</h5>
          <div className='card-text dapyq'>
            <p>
              <MdOutlineMeetingRoom /> {property.room}
            </p>
            <p>
              <MdOutlineBedroomParent /> {property.bed}
            </p>
            <p>
              <MdOutlineBathtub /> {property.bath}
            </p>
            <p>
              <BsArrowsMove /> {property.area}
            </p>
          </div>
          <div className='card-text dd'>
            <p className='rate'>{property.price}</p>
            <Link to={`/property/${property.id}`} className='btn btn-primary'>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
