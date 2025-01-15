import React, { useState } from "react";
import "../../../css/manager/productManager/ProductManagerSearchbar.css"
const ProductManagerSearchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`검색어: ${searchTerm}`); // 검색어 처리 로직 (API 호출 등) 추가 가능
    };

    const handleProductRegister = () => {
        alert("상품 등록 페이지로 이동합니다."); // 페이지 이동 로직 추가 가능
    };


  return (
    <nav className="productManagerSearchbar">
      <div className="navbar-content">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="상품을 입력하세요"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: "500px",  fontSize: "16px" }}
          />
          <button type="submit" className="search-button">검색</button>
        </form>
      </div>
    </nav>
  )
 
};

export default ProductManagerSearchbar;