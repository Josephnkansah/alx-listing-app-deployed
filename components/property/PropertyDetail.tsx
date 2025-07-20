import React from 'react';

type Property = {
  id: number;
  name: string;
  image: string;
  price: number;
  address: string;
  description: string;
  location: string; // Include this since your app expects it
};

type Props = {
  property: Property;
};

const PropertyDetail: React.FC<Props> = ({ property }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
      <p className="text-gray-600 mb-2">{property.address}</p>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-xl font-semibold mb-4">${property.price.toLocaleString()}</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetail;
