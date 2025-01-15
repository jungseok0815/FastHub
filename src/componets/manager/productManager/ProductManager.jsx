import React from 'react';
import SearchBar from "./ProductManagerSearchbar";
import Content from "./ProductManagerContent"
import "../../../css/manager/productManager/ProductManager.css"
const ProductManagement = () => {

  const handleProductRegister =() =>{

  }

  return <div>
      <SearchBar/>
      <div className='productManagerInsert'>
        <button className="register-button" onClick={handleProductRegister}>
            상품 등록
          </button>
      </div>
      <Content/>
    </div>;
};

export default ProductManagement;