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
      <h1 className="text-3xl font-bold mb-2"
