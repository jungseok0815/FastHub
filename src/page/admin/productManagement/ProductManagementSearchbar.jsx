import React, { useEffect, useState } from "react";
import "../../../styles/admin/productManagement/ProductManagementSearchbar.css"
import { SearchBar } from "../../../componets/admin/searchbar/Searchbar.jsx";
import { ListProduct } from "../../../api/product.jsx";
const ProductManagerSearchbar = ({onChange}) => {

    useEffect(() => {
      if(searchTerm.length >= 3){
        ListProduct(searchTerm)
        .then((res) => { 
          if(res.status === 200){
            console.log(res.data)
          }
        })
      }
    },[searchTerm])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
    const handleCategoryChange = (e) =>{
      e.preventDefault();
    }

  return (
    <nav className="productManagerSearchbar">
      <div className="navbar-content">
        {/* 카테고리 선택박스 */}
        <select
            className="category-select border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleCategoryChange}
          >
            <option value="productNm">상품명</option>
            <option value="productBrand">브랜드</option>
            <option value="productCode">상품코드</option>
          </select>

        <SearchBar 
            onChange={handleSearchChange}
            placeholder="상품을 입력하세요"
            value={searchTerm}
            width="500px"
        />
   
      </div>
    </nav>
  )
 
};

export default ProductManagerSearchbar;