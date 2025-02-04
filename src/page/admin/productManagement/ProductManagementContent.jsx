import React from "react";
import "../../../styles/admin/productManagement/ProductManagementContent.css"
import ProductItem from "../../../componets/admin/product/ProductItemCard";

const ProductManagerContent = ({products, openModal}) => {
  return (
   <div className="productManagerContent overflow-scroll px-[20px] scrollbar-hide" >
      <div className="container mx-auto  px-4 py-7">
        <h2 className="text-xl font-bold text-gray-500 mb-6">상품 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (     
                <ProductItem product={product} openModal ={openModal}/>
            ))}
        </div>
      </div>
   </div>
  )
 
};

export default ProductManagerContent;