// pages/property/[id].tsx

import { GetServerSideProps } from 'next';
import PropertyDetail from '@/components/property/PropertyDetail';

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

const PropertyPage = ({ property }: Props) => {
  return <PropertyDetail property={property} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`);
  const property = await res.json();

  return {
    props: { property },
  };
};

export default PropertyPage;
