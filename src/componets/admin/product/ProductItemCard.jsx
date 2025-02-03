import {React} from 'react';


const ProductList = ({ product, openModal }) => {

  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105" onClick={() => {openModal(product)}}>
      <div className="relative h-48">
        <img
          src={product.images.length === 0 ? "/api/placeholder/400/320" :`http://localhost:8080/api/img/get?imgNm=${product.images[0].imgNm}`}
          alt={product.productNm}
          className="w-full object-cover h-full"
        />
      </div>
      <div className="p-2">
        <h3 className="text font-semibold text-gray-800 mb-2">
          {product.productNm}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{product.category}</span>
          <span className="text font-bold text-blue-400">
            ₩{product.productPrice?.toLocaleString()}
          </span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            재고: {product.productQuantity}개
          </span>
        </div>
      </div>
    </div> 
  );
};


export default ProductList;