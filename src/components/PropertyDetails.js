import React from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../Hoteldata.json'
import PropertyCard from './PropertyCard';

function PropertyDetails() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const property = hotelsData.find((hotel) => hotel.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>Property Details</h1>
      <PropertyCard property={property} />
    </div>
  );
}

export default PropertyDetails;
