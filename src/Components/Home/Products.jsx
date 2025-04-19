import React from 'react';
import ProductCard from './ProductCard'; // Import the updated ProductCard
import productsData from '../../data/products'; // Import the product data
import { Link } from 'react-router-dom'; // Import Link for the button
import { MdArrowForward } from 'react-icons/md'; // Import an icon for the button

const Products = () => {
  return (
    // Add padding and container for better layout
    <div className='container mx-auto px-4 py-16'>
        {/* Section Title Area - Modified for Flex Layout */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-12 gap-4'>
            {/* Left side: Title and Description */}
            <div className='text-center sm:text-left'>
                <h1 className='text-3xl md:text-4xl font-bold mb-2'>Feel the Charge of Change</h1>
                <p className='text-gray-600 dark:text-gray-400 max-w-xl'>
                    Discover our latest collection of high-performance computers and accessories.
                </p>
            </div>
            {/* Right side: View All Link */}
            <Link
                to="/shop"
                className="inline-flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200 whitespace-nowrap"
            >
                <span>View All</span>
                <MdArrowForward className="w-5 h-5" />
            </Link>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {productsData.map((product) => (
                // Pass each product object as a prop to ProductCard
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {/* Removed the old button section */}

    </div>
  );
};

export default Products;