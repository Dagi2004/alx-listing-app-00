import React from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants"; // Adjust the import path if necessary

const HomePage = () => {
  return (
    <div>
      <h1>Property Listings</h1>
      <div className="property-listing-container">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.name} className="property-card">
            <Image
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
            <p>Rating: {property.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
