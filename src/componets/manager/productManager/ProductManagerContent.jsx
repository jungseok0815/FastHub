import React, { useEffect, useState } from "react";
import "../../../css/manager/productManager/ProductManagerContent.css"
import ProductList from "./ProductItemCard";
import api from "../../../config/ApiConfig";
const ProductManagerContent = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await api.get("/api/product/list");
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