import React, { useEffect, useState } from "react";
import "../../../styles/admin/productManagement/ProductManagementContent.css"
import ProductList from "../../../componets/admin/product/ProductItemCard";
import {listProduct} from "../../../api/product";
const ProductManagerContent = () => {
  const [products, setProducts] = useState([]);
  
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
      <ProductList products={products}/>
   </content>
  )
 
};

export default ProductManagerContent;