// components/property/PropertyDetail.tsx

import React from 'react';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  description?: string;
}

interface Props {
  property: Property;
}

const PropertyDetail: React.FC<Props> = ({ property }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-1">{property.location}</p>
      <p className="text-blue-600 font-bold text-xl mb-4">{property.price}</p>
      <p className="text-gray-700">
        {property.description || 'No description available.'}
      </p>
    </div>
  );
};

export default PropertyDetail;
