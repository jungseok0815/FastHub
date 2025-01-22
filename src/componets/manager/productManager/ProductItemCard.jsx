import {React, useState} from 'react';
import ProductInsertModal from "./ProductInsertModal"

const ProductList = ({ products }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, serProduct] = useState(null)

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDetail = (product) =>{
    serProduct(product); 
    handleOpenModal()
  }

  return (
    <div className="container mx-auto  px-4 py-7">
      <h2 className="text-xl font-bold text-gray-500 mb-6">상품 목록</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105" onClick={() => handleDetail(product)}>
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
        ))}
      </div>
      <ProductInsertModal isOpen={isModalOpen} onClose={handleCloseModal} product={product} />
    </div>
    
  );
};


export default ProductList;