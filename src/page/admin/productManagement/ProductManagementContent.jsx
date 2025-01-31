import React, { useEffect, useState } from "react";
import "../../../styles/admin/productManagement/ProductManagementContent.css"
import ProductList from "../../../componets/admin/product/ProductItemCard";
import {listProduct} from "../../../api/product";
const ProductManagerContent = () => {
  const [products, setProducts] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);



  useEffect(() => {
      const fetchProducts =  async () => {
        try {
            const response = await listProduct();
            setProducts(response.data.data);
        } catch (error) {
            console.error("상품 목록 조회 실패:", error);
        }
      };
      fetchProducts();
  }, [])

  return (
   <content className="productManagerContent overflow-scroll px-[20px] scrollbar-hide" >
      <div className="container mx-auto  px-4 py-7">
        <h2 className="text-xl font-bold text-gray-500 mb-6">상품 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (             
                <ProductList product={product} openModal ={() => handleOpenModal()}/>
            ))}
        </div>
      </div>
      <ProductInsertModal isOpen={isModalOpen} onClose={handleCloseModal}  />
   </content>
  )
 
};

export default ProductManagerContent;